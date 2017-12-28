// resolve a content json to it's individual files

const ContentJSON = module.exports = {
  util: {
    serialize: (dagNode, callback) => {},
    deserialize: (data, callback) => {},
    cid: (dagNode, callback) => {}
  },
  resolver: {
    multicodec: 'zeronet-content-json',
    resolve: (block, path, callback) => {},
    tree: (block, options, callback) => {},
    isLink: (block, path, callback) => {}
  }
}
