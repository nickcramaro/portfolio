'use strict';

/**
 * Saying.js controller
 *
 * @description: A set of functions called "actions" for managing `Saying`.
 */

module.exports = {

  /**
   * Retrieve saying records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    const data = await strapi.services.saying.fetchAll(ctx.query);
    console.log(data);
    // Send 200 `ok`
    ctx.send(data);
  },

  /**
   * Retrieve a saying record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    const data = await strapi.services.saying.fetch(ctx.params);

    // Send 200 `ok`
    ctx.send(data);
  },

  /**
   * Create a/an saying record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    const data = await strapi.services.saying.add(ctx.request.body);

    // Send 201 `created`
    ctx.created(data);
  },

  /**
   * Update a/an saying record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    const data = await strapi.services.saying.edit(ctx.params, ctx.request.body) ;

    // Send 200 `ok`
    ctx.send(data);
  },

  /**
   * Destroy a/an saying record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    const data = await strapi.services.saying.remove(ctx.params);

    // Send 200 `ok`
    ctx.send(data);
  }
};
