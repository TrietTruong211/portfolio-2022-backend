export default {
  name: "miscellaneous",
  title: "Miscellaneous",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "greeting",
      title: "Greeting",
      type: "text",
    },
    {
      name: "title",
      title: "Title",
      type: "text",
    },
    {
      name: "resume",
      title: "Resume",
      type: "file",
    },
    {
      name: "profileImage",
      title: "Profile Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
