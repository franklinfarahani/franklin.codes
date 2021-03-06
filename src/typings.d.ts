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
    readonly social: {
      readonly twitter?: string
      readonly github?: string
      readonly linkedin?: string
      readonly email?: string
    }
  }
}

declare type Edge<T> = { readonly node: T }

declare type Edges<T> = ReadonlyArray<Edge<T>>

declare type Markdown = {
  readonly id: string
  readonly excerpt?: string
  readonly html: DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>
  readonly fields: {
    readonly slug: string
    readonly readingTime: {
      readonly text: string
    }
  }
  readonly code: {
    readonly body: string
  }
  readonly frontmatter: {
    readonly date: string
    readonly draft?: boolean
    readonly tags: ReadonlyArray<string>
    readonly title: string
    readonly description: string
    readonly cover: {
      readonly childImageSharp?: {
        readonly fluid: FluidObject
        readonly fixed: FixedObject
        readonly resize: {
          readonly src: string
          readonly height: string
          readonly width: string
        }
      }
    }
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

declare type Posts = {
  readonly data: {
    readonly posts: AllMarkdown
  }
}

declare type AllMarkdown = {
  readonly totalCount: number
  readonly edges: Edges<Markdown>
}

declare type ProjectMarkdown = {
  readonly html: DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>
  readonly frontmatter: {
    readonly id: number
    readonly title: string
    readonly tags: ReadonlyArray<string>
    readonly repo: string
    readonly external?: string
    readonly media: {
      readonly childImageSharp?: {
        readonly fluid: FluidObject
      }
    }
  }
}

declare type AllProjectsMarkdown = {
  readonly edges: Edges<ProjectMarkdown>
}