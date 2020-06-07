/**
 * Global application config.
 */

export default {
  API_URL:
    process.env.REACT_APP_API_URL || "https://vast-castle-91628.herokuapp.com",
  SEARCH_UI_API_URL:
    process.env.REACT_APP_SEARCH_UI_API_URL ||
    "https://u-bahn-search-ui-api-dev.herokuapp.com/api",

  BULK_UPLOAD_TEMPLATE_ID: process.env.REACT_APP_BULK_UPLOAD_TEMPLATE_ID,

  DEFAULT_SORT_ORDER: "name",
  ITEMS_PER_PAGE: 12,

  PRIMARY_ATTRIBUTES: {
    availability: "isAvailable",
    company: "company",
    location: "location",
    firstName: "firstName",
    lastName: "lastName",
    title: "title",
  },

  AUTH0: {
    domain: "topcoder-dev.auth0.com",
    clientId: "sY1QEijoXdKsoXXpi7aPZPCqnvl8H36U",
  },
};
