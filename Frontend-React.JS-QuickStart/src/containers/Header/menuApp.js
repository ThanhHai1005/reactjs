export const adminMenu = [
    { //about us
        name: 'menu.admin.about-us',
        menus: [
            {
                name: 'menu.admin.about-us', link: '/system/user-manage'
            },
            {
                name: 'menu.admin.solution', link: '/system/user-redux'
            },

            {
                name: 'menu.admin.manage-doctor', link: '/system/user-doctor',
                // subMenus: [
                //     { name: 'menu.system.system-administrator.user-manage', link: '/system/user-manage' },
                //     { name: 'menu.system.system-administrator.user-redux', link: '/system/user-redux' },

                // ]
            },

            {
                name: 'menu.admin.manage-admin', link: '/system/user-admin'
            },

        ]
    },

    { //solution
        name: 'menu.admin.solution',
        menus: [
            {
                name: 'menu.admin.manage-clinic', link: '/system/manage-clinic'
            },

            {
                name: 'menu.admin.manage-clinic', link: '/system/manage-clinic'
            },

            {
                name: 'menu.admin.manage-clinic', link: '/system/manage-clinic'
            },

        ]
    },

    // { 
    //     name: 'menu.admin.video',
    //     menus: [
    //         {
    //             name: 'menu.admin.manage-speciatly', link: '/system/manage-speciatly'
    //         },

    //     ]
    // },



];



export const adminMenu2 = [
    { //video
        name: 'menu.admin.video',
        menus: [
            {
                name: 'menu.admin.manage-speciatly', link: '/system/manage-speciatly'
            },

        ]
    },


    { //Contact
        name: 'menu.admin.contact',
        menus: [
            {
                name: 'menu.admin.manage-handbook', link: '/system/manage-handbook'
            },

        ]
    },
]