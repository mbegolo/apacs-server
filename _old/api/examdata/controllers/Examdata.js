'use strict';

/**
 * Examdata.js controller
 *
 * @description: A set of functions called "actions" for managing `Examdata`.
 */

module.exports = {

  /**
   * Retrieve examdata records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.examdata.search(ctx.query);
    } else {
      return strapi.services.examdata.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a examdata record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.examdata.fetch(ctx.params);
  },

  /**
   * Count examdata records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.examdata.count(ctx.query);
  },

  /**
   * Create a/an examdata record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.examdata.add(ctx.request.body);
  },

  /**
   * Update a/an examdata record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.examdata.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an examdata record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.examdata.remove(ctx.params);
  }
};
