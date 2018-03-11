'use strict';

/**
 * Post.js controller
 *
 * @description: A set of functions called "actions" for managing `Post`.
 */

module.exports = {

  /**
   * Retrieve post records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    const data = await strapi.services.post.fetchAll(ctx.query);

    // Send 200 `ok`
    ctx.send(data);
  },

  /**
   * Retrieve a post record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    const data = await strapi.services.post.fetch(ctx.params);

    // Send 200 `ok`
    ctx.send(data);
  },

  /**
   * Create a/an post record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    const data = await strapi.services.post.add(ctx.request.body);

    // Send 201 `created`
    ctx.created(data);
  },

  /**
   * Update a/an post record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    const data = await strapi.services.post.edit(ctx.params, ctx.request.body) ;

    // Send 200 `ok`
    ctx.send(data);
  },

  /**
   * Destroy a/an post record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    const data = await strapi.services.post.remove(ctx.params);

    // Send 200 `ok`
    ctx.send(data);
  }
};
