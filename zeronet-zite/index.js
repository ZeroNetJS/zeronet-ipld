// resolve a zite to a content-json

const Zite = module.exports = {
  util: {
    serialize: (dagNode, callback) => {},
    deserialize: (data, callback) => {},
    cid: (dagNode, callback) => {}
  },
  resolver: {
    multicodec: 'zeronet-zite',
    resolve: (block, path, callback) => {},
    tree: (block, options, callback) => {},
    isLink: (block, path, callback) => {}
  }
}
