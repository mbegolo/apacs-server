'use strict';

/**
 * Examvoice.js controller
 *
 * @description: A set of functions called "actions" for managing `Examvoice`.
 */

module.exports = {

  /**
   * Retrieve examvoice records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.examvoice.search(ctx.query);
    } else {
      return strapi.services.examvoice.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a examvoice record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.examvoice.fetch(ctx.params);
  },

  /**
   * Count examvoice records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.examvoice.count(ctx.query);
  },

  /**
   * Create a/an examvoice record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.examvoice.add(ctx.request.body);
  },

  /**
   * Update a/an examvoice record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.examvoice.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an examvoice record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.examvoice.remove(ctx.params);
  }
};
