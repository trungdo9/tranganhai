import fs from "fs";
import path from "path";
import matter from "gray-matter";

// Articles are authored outside the Next.js project, in the shared
// marketing plans folder, so the content pipeline can be updated by a
// separate (non-engineering) workflow without touching this app's source.
const ARTICLES_DIR = path.join(
  process.cwd(),
  "..",
  "plans",
  "marketing",
  "tranganhai",
  "articles"
);

export interface ArticleFrontmatter {
  title: string;
  meta_description: string;
  slug: string;
  target_keyword?: string;
  row_id?: number;
  cluster_level?: string;
  priority?: string;
  status?: string;
  word_count?: number;
  schema_notes?: string;
  geo_notes?: string;
  open_questions?: string[];
  // Not present in any article yet, but the pipeline must not silently drop
  // content that sets it — see legalReviewRequired below.
  legal_review_required?: boolean;
  [key: string]: unknown;
}

export interface ArticleSummary {
  slug: string;
  frontmatter: ArticleFrontmatter;
  legalReviewRequired: boolean;
}

export interface ArticleFull extends ArticleSummary {
  content: string;
}

function listArticleFiles(): string[] {
  if (!fs.existsSync(ARTICLES_DIR)) return [];
  return fs
    .readdirSync(ARTICLES_DIR)
    .filter((file) => file.toLowerCase().endsWith(".md"));
}

function readArticleFile(filename: string): ArticleFull | null {
  const filePath = path.join(ARTICLES_DIR, filename);
  try {
    const raw = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(raw);

    if (!data || typeof data.title !== "string") {
      // Missing required frontmatter — skip rather than crash the build.
      return null;
    }

    const fallbackSlug = filename.replace(/\.md$/i, "");
    const slug =
      typeof data.slug === "string" && data.slug.trim().length > 0
        ? data.slug.trim()
        : fallbackSlug;

    const frontmatter: ArticleFrontmatter = {
      ...data,
      title: data.title,
      meta_description:
        typeof data.meta_description === "string"
          ? data.meta_description
          : typeof data.description === "string"
            ? data.description
            : "",
      slug,
    } as ArticleFrontmatter;

    return {
      slug,
      frontmatter,
      legalReviewRequired: Boolean(data.legal_review_required),
      content,
    };
  } catch {
    // Any parse failure (bad YAML, unreadable file, etc.) — skip, don't crash.
    return null;
  }
}

/**
 * Returns every parseable article, sorted by row_id (if present) then title.
 * Does not filter on `status` — this is a listing feature, not a publish
 * gate. Articles are only skipped when they genuinely fail to parse.
 */
export function getAllArticles(): ArticleSummary[] {
  const files = listArticleFiles();
  const articles = files
    .map(readArticleFile)
    .filter((article): article is ArticleFull => article !== null)
    .map(({ content, ...summary }) => summary);

  return articles.sort((a, b) => {
    const rowA = typeof a.frontmatter.row_id === "number" ? a.frontmatter.row_id : Number.MAX_SAFE_INTEGER;
    const rowB = typeof b.frontmatter.row_id === "number" ? b.frontmatter.row_id : Number.MAX_SAFE_INTEGER;
    if (rowA !== rowB) return rowA - rowB;
    return a.frontmatter.title.localeCompare(b.frontmatter.title, "vi");
  });
}

export function getArticleBySlug(slug: string): ArticleFull | null {
  const files = listArticleFiles();
  for (const file of files) {
    const article = readArticleFile(file);
    if (article && article.slug === slug) {
      return article;
    }
  }
  return null;
}
