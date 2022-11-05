import { Tag } from "src/features/remoteConfig"
import { SupportedCard } from "src/config";

export type SearchEngineType = {
  url: string
  label: string
}

export type SelectedCard = {
  id: number,
  name: string
}

export type SelectedTag = {
  label: string,
  value: string
}

export type UserPreferences = {
  userSelectedTags: Tag[]
  theme: "light" | "dark",
  openLinksNewTab: boolean,
  listingMode: "normal" | "compact",
  searchEngine: string,
  cards: SelectedCard[]
}

export type SearchEngine = {
  url: string,
  label: string,
}

export type Theme = "dark" | "light";
export type ListingMode = "normal" | "compact";

export type BaseEntry = {
  id: string
  url: string
}

export type Article = BaseEntry & {
  title: string
  published_at: number
  tags: Array<string>
  reactions: number
  comments: number
  image_url: string
  source: string
  original_url?: string
  comments_url?: string
  description?: string
  subreddit?: string
  flair_text?: string
  flair_background_color?: string
  flair_text_color?: string
}

export type Repository = BaseEntry & {
  title: string
  programmingLanguage: string
  stars: number
  source: string
  description: string
  owner: string
  forks: number
  starsInDateRange?: number
  name: string
}

export type Conference = BaseEntry & {
  name: string
  start_date: number
  end_date: number
  tag: string
  online: Boolean
  city?: string
  country?: string
}

export type CardPropsType = {
  meta: SupportedCard,
  withAds: boolean
  analyticsTag?: string
}

export type ArticleItemPropsType = {
  index: number
  item: Article
  listingMode?: ListingMode,
  selectedTag?: SelectedTag
}

export type CardSettingsType = {
  language: string
  dateRange?: string
}

export type ConferenceItemPropsType = {
  index: number
  item: Conference
  listingMode?: ListingMode
}

export type RepoItemPropsType = {
  index: number
  item: Repository
  listingMode?: ListingMode,
  selectedTag?: SelectedTag
}