export const adminMenu = [
    { //about us
        name: 'menu.admin.about-us', link: '/system/home',
        menus: [
            {
                name: 'menu.admin.about-us', link: '/system/about-us'
            },
            {
                name: 'menu.admin.organization', link: '/system/organi'
            },

            {
                name: 'menu.admin.vission', link: '/system/vission',

            },

            {
                name: 'menu.admin.partner', link: '/system/partner'
            },

        ]
    },

    { //solution
        name: 'menu.admin.solution',
        menus: [
            {
                name: 'menu.admin.factory',
                subMenus: [
                    { name: 'menu.admin.factory-sub.timekeeping', link: '/system/user-manage' },
                    { name: 'menu.admin.factory-sub.security', link: '/system/user-redux' },
                    { name: 'menu.admin.factory-sub.error-detection', link: '/system/user-redux' },
                ]
            },

            {
                name: 'menu.admin.enterprise',
                subMenus: [
                    { name: 'menu.admin.enterprise-sub.security', link: '/system/user-manage' },
                    { name: 'menu.admin.enterprise-sub.timekeeping', link: '/system/user-redux' },
                    { name: 'menu.admin.enterprise-sub.roll-call', link: '/system/user-redux' },

                    { name: 'menu.admin.enterprise-sub.digital-trans', link: '/system/user-redux' },
                    { name: 'menu.admin.enterprise-sub.access-control', link: '/system/user-redux' },
                    { name: 'menu.admin.enterprise-sub.construction-management', link: '/system/user-redux' },
                ]
            },

            {
                name: 'menu.admin.bank',
                subMenus: [
                    { name: 'menu.admin.bank-sub.digital-trans', link: '/system/user-manage' },
                    { name: 'menu.admin.bank-sub.access-control', link: '/system/user-redux' },
                    { name: 'menu.admin.bank-sub.roll-call', link: '/system/user-redux' },

                    { name: 'menu.admin.bank-sub.warehouse', link: '/system/user-redux' },
                    { name: 'menu.admin.bank-sub.queuing', link: '/system/user-redux' },

                ]
            },



            {
                name: 'menu.admin.hospital',
                subMenus: [
                    { name: 'menu.admin.hospital-sub.nurse', link: '/system/user-manage' },
                    { name: 'menu.admin.hospital-sub.security', link: '/system/user-manage' },
                    { name: 'menu.admin.hospital-sub.roll-call', link: '/system/user-manage' },
                ]
            },

            {
                name: 'menu.admin.retail-store',
                subMenus: [
                    { name: 'menu.admin.retail-sub.behavior', link: '/system/user-manage' },
                ]
            },

        ]
    },

];



export const adminMenu2 = [
    { //video
        name: 'menu.admin.video',
    },


    { //Contact
        name: 'menu.admin.contact', link: '/system/partner'

    },
]