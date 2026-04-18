import { StructureBuilder } from 'sanity/structure'

export const structure = (S: StructureBuilder) =>
  S.list()
    .title('Content')
    .items([
      // Blog Posts
      S.listItem()
        .title('Blog Posts')
        .schemaType('post')
        .child(
          S.documentList()
            .title('Blog Posts')
            .filter('_type == "post"')
            .defaultOrdering([{ field: 'publishedAt', direction: 'desc' }])
        ),

      // Categories
      S.listItem()
        .title('Categories')
        .schemaType('category')
        .child(
          S.documentList()
            .title('Categories')
            .filter('_type == "category"')
        ),

      // Authors
      S.listItem()
        .title('Authors')
        .schemaType('author')
        .child(
          S.documentList()
            .title('Authors')
            .filter('_type == "author"')
        ),
    ])
