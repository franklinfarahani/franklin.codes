declare module '*.svg';
declare module '*.woff';
declare module '*.woff2';

declare module 'emotion-icons/fa-brands'
declare module 'emotion-icons/fa-solid'

declare type DeepPartial<T> = { [P in keyof T]?: DeepPartial<T[P]> }

declare type Site = {
  readonly siteMetadata: {
    readonly title: string
    readonly description: string
    readonly author: string
  }
}

declare type Edge<T> = { readonly node: T }

declare type Edges<T> = ReadonlyArray<Edge<T>>

declare type Markdown = {
  readonly id: string
  readonly excerpt?: string
  readonly fields: {
    readonly slug: string
  }
  readonly code: {
    readonly body: string
  }
  readonly frontmatter: {
    readonly date: string
    readonly draft?: boolean
    readonly path: string
    readonly tags: ReadonlyArray<string>
    readonly title: string
    readonly description: string
  }
  readonly parent?: {
    readonly absolutePath?: string
    readonly accessTime?: string
    readonly base?: string
    readonly birthTime?: string
    readonly changeTime?: string
    readonly extension?: string
    readonly modifiedTime?: string
    readonly name?: string
    readonly relativeDirectory?: string
    readonly relativePath?: string
    readonly size?: number
    readonly sourceInstanceName?: string
  }
}

declare type AllMarkdown = {
  readonly totalCount: number
  readonly edges: Edges<Markdown>
}