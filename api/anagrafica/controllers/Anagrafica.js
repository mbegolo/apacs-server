'use strict';

/**
 * Anagrafica.js controller
 *
 * @description: A set of functions called "actions" for managing `Anagrafica`.
 */

module.exports = {

  /**
   * Retrieve anagrafica records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.anagrafica.search(ctx.query);
    } else {
      return strapi.services.anagrafica.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a anagrafica record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.anagrafica.fetch(ctx.params);
  },

  /**
   * Count anagrafica records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.anagrafica.count(ctx.query);
  },

  /**
   * Create a/an anagrafica record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.anagrafica.add(ctx.request.body);
  },

  /**
   * Update a/an anagrafica record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.anagrafica.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an anagrafica record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.anagrafica.remove(ctx.params);
  }
};
