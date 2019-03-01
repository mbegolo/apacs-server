'use strict';

/**
 * Voceesame.js controller
 *
 * @description: A set of functions called "actions" for managing `Voceesame`.
 */

module.exports = {

  /**
   * Retrieve voceesame records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.voceesame.search(ctx.query);
    } else {
      return strapi.services.voceesame.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a voceesame record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.voceesame.fetch(ctx.params);
  },

  /**
   * Count voceesame records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.voceesame.count(ctx.query);
  },

  /**
   * Create a/an voceesame record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.voceesame.add(ctx.request.body);
  },

  /**
   * Update a/an voceesame record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.voceesame.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an voceesame record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.voceesame.remove(ctx.params);
  }
};
