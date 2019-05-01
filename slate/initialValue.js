import { Value } from 'slate'

const initialValue = Value.fromJSON({
  document: {
    nodes: [
      {
        object: 'block',
        type: 'paragraph',
        data: {
          created: 0,
        },
        nodes: [
          {
            object: 'text',
            leaves: [
              {
                text: 'This is some text in a paragraph',
              },
            ],
          },
        ],
      },
    ],
  },
})

export default initialValue
