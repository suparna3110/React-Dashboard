export default [
    {
      links: [
        {
          name: "Dashboard",
          expandAriaLabel: "Expand Home section",
          collapseAriaLabel: "Collapse Home section",
          links: [
            {
              name: "Activity",
              url: 'http://msn.com',
              key: "key1",
            },
            {
              name: "Assessment",
              key: "key2",
            }
          ],
          isExpanded: true,
          icon: "BIDashboard",
        },
        {
          name: "Members",
          url: "http://example.com",
          key: "key3",
          isExpanded: true,
          target: "_blank",
          icon: "People",
        },
        {
          name: "Packages",
          // url: "http://msn.com",
          key: "key4",
          target: "_blank",
          icon: "Packages",
        },
        {
          name: "Billing",
          url: "http://msn.com",
          key: "key5",
          target: "_blank",
          icon: "AllCurrency",
        },
        {
          name: 'Notebook',
          url: 'http://msn.com',
          key: 'key6',
          icon: "AccountActivity"
        },
        {
          name: 'Communication and Media',
          url: 'http://msn.com',
          key: 'key7',
          icon: "AddPhone"
        },
        {
          name: 'News',
          url: 'http://cnn.com',
          icon: 'News',
          key: 'key8'
        }
      ],
    },
  ];
  
