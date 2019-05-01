const schema = {
  document: {
    nodes: [
      {
        match: { type: 'paragraph' },
      },
    ],
  },
  blocks: {
    paragraph: {
      nodes: [
        {
          match: [{ object: 'text' }, { type: 'timestamp' }],
        },
      ],
    },
  },
  inlines: {
    timestamp: {
      isVoid: true,
    },
  },
}

export default schema
