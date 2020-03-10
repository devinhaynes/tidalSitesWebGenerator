var webConfig = {
  domain: "www.example.com",
  title: "Test",
  logo: "logo.png",
  businessName: "Example Industries",
  meta: [
    {
      name: "author",
      content: "Mr. Test"
    }
  ],
  emails: [
    {
      customerService: "service@example.com"
    },
    {
      webmaster: "webguy@example.com"
    }
  ],
  phoneNumbers: [
    {
      main: "123-456-7890",
      sales: "123-456-7899",
      billing: "123-456-7898"
    }
  ],
  pages: [
    {
      name: "Index",
      header: "Test",
      image: "image.png",
      subheader: "Tailoring made easy",
      main: "Testing",
      blurb:
        "Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum"
    },
    {
      name: "About",
      header: "About Us",
      blurb:
        "Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum"
    }
  ],
  theme: "default",
  colorScheme: {
    primary: "#ff0000",
    secondary: "#ff0000",
    tertiary: "#ff0000"
  }
};

module.exports = webConfig;
