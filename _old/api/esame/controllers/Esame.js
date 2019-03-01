'use strict';

/**
 * Esame.js controller
 *
 * @description: A set of functions called "actions" for managing `Esame`.
 */

module.exports = {

  /**
   * Retrieve esame records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.esame.search(ctx.query);
    } else {
      return strapi.services.esame.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a esame record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.esame.fetch(ctx.params);
  },

  /**
   * Count esame records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.esame.count(ctx.query);
  },

  /**
   * Create a/an esame record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.esame.add(ctx.request.body);
  },

  /**
   * Update a/an esame record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.esame.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an esame record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.esame.remove(ctx.params);
  }
};
