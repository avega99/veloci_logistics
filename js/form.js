// 51F5D4F81A7D5D099177400AF8481A8B2D1B
// 51F5D4F81A7D5D099177400AF8481A8B2D1B

const form = document.querySelector('form')

function sendEmail() {
  const formData = new FormData(form)

  const message = formData.get('message')
  const phone = formData.get('phone')
  const name = formData.get('name')
  const lastname = formData.get('lastname')
  const email = formData.get('email')

  const bodyMessage = `
      <strong>Nombre:</strong> ${name}<br> Correo: ${email}<br> Número de teléfono: ${phone}<br> Mensaje: ${message}
    `

  console.log({ message, phone, name, lastname, email })

  // velocilogis@gmail.com
  // 4302DD735E11ED63A26840CD5453EB87EEB4

  // CF4966584ED428D3C62AFAD8CE4695F8C6E9

  Email.send({
    // SecureToken: '89551411-a0ff-4b47-8a65-1957ce435171',
    Host: 'smtp.elasticemail.com',
    Username: 'velocilogistics@gmail.com',
    Password: 'CF4966584ED428D3C62AFAD8CE4695F8C6E9',
    To: 'velocilogistics@gmail.com',
    From: 'velocilogistics@gmail.com',
    Subject: 'CONTACTO',
    Body: bodyMessage,
  })
    .then((message, data) => {
      console.log({ message })
      if (message == 'OK') {
        Swal.fire({
          title: 'Buen trabajo!',
          text: 'Mensaje enviado correctamente!',
          icon: 'success',
        })
        form.reset()
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Hubo un error al enviar el mensaje.',
          text: 'Lo sentimos, algo salió mal, por favor íntentelo más tarde',
          //footer: '<a href="#">Why do I have this issue?</a>',
        })
      }
    })
    .catch((error) => {
      console.log({ error })
      Swal.fire({
        icon: 'error',
        title: 'Hubo un error al enviar el mensaje.',
        text: 'Lo sentimos, algo salió mal, por favor íntentelo más tarde',
        //footer: '<a href="#">Why do I have this issue?</a>',
      })
    })
}

form.addEventListener('submit', (e) => {
  e.preventDefault()

  sendEmail()
})
