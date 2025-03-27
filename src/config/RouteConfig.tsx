const RouteConfig = {
  admin: {
    base: "/admin",
    contacts: "/admin/contacts",
    emails: "/admin/emails",
    help: {
        base : "/admin/help",
        contacts : "/admin/help/contacts",
        sections : "/admin/help/sections",
        services : "/admin/help/services",
        textadv : "/admin/help/textadv",
    },
    master: "/admin/master",
    posts: {
      base: "/admin/posts",
      new: "/admin/posts/new",
    },
    sections: {
        base : "/admin/sections",
        new : "/admin/sections/new"
    },
    services: {
        base : "/admin/services",
        new : "/admin/services/new"
    },
    settings: {
        base : "/admin/settings",
        themes : "/admin/settings/themes"
    },
    textadv: {
        base : "/admin/textadv",
        new : "/admin/textadv/new",
    },
  },
};

export default RouteConfig;
