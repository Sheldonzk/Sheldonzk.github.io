/* ============================================================
   首页左侧个人资料栏（Keep 主题 inject 注入）
   修改个人信息请编辑下面的 HOME_SIDEBAR_PROFILE 对象
   ============================================================ */

const HOME_SIDEBAR_PROFILE = {
  // 头像：图片放到 source/images/ 目录，这里填 /images/文件名
  avatar: '/images/logo1.svg',
  // 姓名
  name: 'Kun Zhou',
  // 一句话头衔，如：研究生 / Ph.D. Student
  title: 'Avoid arrogance and impatience',
  // 链接列表：icon 是 Font Awesome 类名，url 是跳转地址
  links: [
    { icon: 'fa-brands fa-github', text: 'GitHub', url: 'https://github.com/Sheldonzk' },
    { icon: 'fa-solid fa-envelope', text: 'Email', url: 'mailto:sheldonzk@qq.com' },
  ],
}

// 仅在首页显示
function isHomePage() {
  const path = window.location.pathname.replace(/\/+$/, '')
  return path === '' || path === '/index.html'
}

function initHomeSidebar() {
  if (!isHomePage()) return
  const p = HOME_SIDEBAR_PROFILE
  const card = document.createElement('aside')
  card.className = 'home-sidebar'

  const linksHtml = p.links
    .map(function (l) {
      // 同页跳转（去掉 target="_blank"，避免被浏览器弹窗拦截）
      return '<a href="' + l.url + '"><i class="' + l.icon + '"></i> ' + l.text + '</a>'
    })
    .join('')

  card.innerHTML =
    '<img class="home-sidebar-avatar" src="' + p.avatar + '" alt="' + p.name + '">' +
    '<div class="home-sidebar-name">' + p.name + '</div>' +
    '<div class="home-sidebar-title">' + p.title + '</div>' +
    '<div class="home-sidebar-links">' + linksHtml + '</div>'

  document.body.appendChild(card)
}

document.addEventListener('DOMContentLoaded', initHomeSidebar)
