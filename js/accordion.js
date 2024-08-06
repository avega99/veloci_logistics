document.addEventListener('DOMContentLoaded', function () {
  const accordionHeaders = document.querySelectorAll('.accordion-header')

  accordionHeaders.forEach((header) => {
    header.addEventListener('click', function () {
      const content = this.nextElementSibling
      const chevron = this.querySelector('img')

      if (content.style.height && content.style.height !== '0px') {
        content.style.height = '0px'
        chevron.style.transform = 'rotate(0.0turn)'
      } else {
        document.querySelectorAll('.accordion-content').forEach((content) => {
          content.style.height = '0px'
          chevron.style.transform = 'rotate(0.0turn)'
        })
        content.style.height = `${content.scrollHeight}px`
        chevron.style.transform = 'rotate(0.5turn)'
      }
    })
  })
})
