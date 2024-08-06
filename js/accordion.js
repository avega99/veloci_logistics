document.addEventListener('DOMContentLoaded', function () {
  const accordionHeaders = document.querySelectorAll('.accordion-header')

  accordionHeaders.forEach((header) => {
    header.addEventListener('click', function () {
      const content = this.nextElementSibling

      if (content.style.height && content.style.height !== '0px') {
        content.style.height = '0px'
      } else {
        document.querySelectorAll('.accordion-content').forEach((content) => {
          content.style.height = '0px'
        })
        content.style.height = `${content.scrollHeight}px`
      }
    })
  })
})
