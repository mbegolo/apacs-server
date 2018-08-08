'use strict';

/**
 * Exam.js controller
 *
 * @description: A set of functions called "actions" for managing `Exam`.
 */

module.exports = {

  /**
   * Retrieve exam records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.exam.search(ctx.query);
    } else {
      return strapi.services.exam.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a exam record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.exam.fetch(ctx.params);
  },

  /**
   * Count exam records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.exam.count(ctx.query);
  },

  /**
   * Create a/an exam record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.exam.add(ctx.request.body);
  },

  /**
   * Update a/an exam record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.exam.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an exam record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.exam.remove(ctx.params);
  }
};
