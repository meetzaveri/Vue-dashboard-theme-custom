import Sidebar from './SideBar.vue'

const SidebarStore = {
  showSidebar: false,
  sidebarLinks: [
    {
      name: 'About',
      icon: 'ti-user',
      path: '/admin/overview'
    },
    {
      name: 'Skills',
      icon: 'ti-layers-alt',
      path: '/admin/stats'
    },
    {
      name: 'Experience',
      icon: 'ti-briefcase',
      path: '/admin/maps'
    },
    {
      name: 'Projects',
      icon: 'ti-files',
      path: '/admin/notifications'
    }
  ],
  displaySidebar (value) {
    this.showSidebar = value
  }
}

const SidebarPlugin = {

  install (Vue) {
    Vue.mixin({
      data () {
        return {
          sidebarStore: SidebarStore
        }
      }
    })

    Object.defineProperty(Vue.prototype, '$sidebar', {
      get () {
        return this.$root.sidebarStore
      }
    })
    Vue.component('side-bar', Sidebar)
  }
}

export default SidebarPlugin
