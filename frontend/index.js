function moduleProject3() {

  // 👉 TASK 1 - Write a `buildNav` component that returns a nav

  function buildNav(links) {
    //  ✨ do your magic here

    const theNav = document.createElement('nav')
    links.forEach(link => {
      let a = document.createElement('a')
      a.href = link.href
      a.title = link.title
      a.textContent = link.textContent
      theNav.appendChild(a)
    })


    return theNav
  }

  // ❗ DOM creation using your `buildNav` component (do not change):
  document.querySelector('header').appendChild(buildNav([
    { href: 'https://www.example.com', textContent: 'Home', title: 'Go to the home page' },
    { href: 'https://www.example.com/about', textContent: 'About', title: 'Learn more about our company' },
    { href: 'https://www.example.com/services', textContent: 'Services', title: 'View our available services' },
    { href: 'https://www.example.com/blog', textContent: 'Blog', title: 'Read our latest blog posts' },
    { href: 'https://www.example.com/contact', textContent: 'Contact', title: 'Get in touch with us' },
  ]))

  // 👉 TASK 2A - Write a `buildLearnerCard` component that returns a card

  function buildLearnerCard(learner, languages) {
    //  ✨ do your magic here

    const theCards = document.createElement('div')
    theCards.classList.add('learner-card')

    const nameP = document.createElement('p')
    nameP.textContent = learner.fullName

    const idP = document.createElement('p')
    idP.textContent = `Learner ID: ${learner.id}`

    const dobP = document.createElement('p')
    dobP.textContent = `Date of Birth: ${learner.dateOfBirth}`

    const favLang = document.createElement('p')
    const favLanguage = languages.find(lang => lang.id === learner.favLanguage)
    favLang.textContent = `Favorite Language: ${favLanguage.name}`;

    [nameP, idP, dobP, favLang].forEach(p => {
      theCards.appendChild(p)
    })

    theCards.addEventListener('click', evt => {
      document.querySelectorAll('.learner-card').forEach(theCards => {
        theCards.classList.remove('active')
      })
      theCards.classList.add('active')
    })

    return theCards

  }

  {
    // 👉 TASK 2B - Use the two variables below to make learner Cards, and put them in the DOM

    let languages = [
      { id: 37, name: 'JavaScript', creator: 'Brendan Eich', year: 1995 },
      { id: 82, name: 'Python', creator: 'Guido van Rossum', year: 1991 },
      { id: 12, name: 'Java', creator: 'James Gosling', year: 1995 },
      { id: 53, name: 'C#', creator: 'Microsoft Corporation', year: 2000 },
      { id: 91, name: 'Ruby', creator: 'Yukihiro Matsumoto', year: 1995 }
    ]
    let learners = [
      { id: 24, fullName: 'Kenneth Fisher', dateOfBirth: '1990-01-01', favLanguage: 82 },
      { id: 53, fullName: 'Jess Williams', dateOfBirth: '1985-05-10', favLanguage: 37 },
      { id: 72, fullName: 'Brandon Nguyen', dateOfBirth: '1992-09-15', favLanguage: 53 },
      { id: 41, fullName: 'Sabah Beydoun', dateOfBirth: '1988-03-25', favLanguage: 91 },
      { id: 17, fullName: 'Daniel Castillo', dateOfBirth: '1995-11-05', favLanguage: 12 }
    ]
    //  ✨ do your magic here
    learners.forEach(learner => {
      const learnerCard = buildLearnerCard(learner, languages)
      document.querySelector('section').appendChild(learnerCard)
    })
  }

  // 👉 TASK 3 - Write a `buildFooter` component that returns a footer

  function buildFooter(footerData) {
    //  ✨ do your magic here

    const footer = document.createElement('footer')

    let companyInfoFooter = document.createElement('div')
    companyInfoFooter.classList.add('company-info')

    let companyNameFooter = document.createElement('p')
    companyNameFooter.classList.add('company-name')
    companyNameFooter.textContent = footerData.companyName

    let addressFooter = document.createElement('p')
    addressFooter.classList.add('address')
    addressFooter.textContent = footerData.address

    let emailFooter = document.createElement('p')
    emailFooter.classList.add('contact-email')
    emailFooter.innerHTML = `Email: <a href="mailto:${footerData.contactEmail}"> ${footerData.contactEmail}</a>`

    companyInfoFooter.appendChild(companyNameFooter)
    companyInfoFooter.appendChild(addressFooter)
    companyInfoFooter.appendChild(emailFooter)

    let socialMediaFooter = document.createElement('div')
    socialMediaFooter.classList.add('social-media')

    for (let platform in footerData.socialMedia) {
      let socialMediaLink = document.createElement('a')
      socialMediaLink.href = footerData.socialMedia[platform]
      socialMediaLink.textContent = platform.charAt(0).toUpperCase() + platform.slice(1)
      socialMediaFooter.appendChild(socialMediaLink)
    }
    
    let currentYear = new Date().getFullYear()
    let copyright = document.createElement('div')
    copyright.textContent = `© ${footerData.companyName.toUpperCase()} ${currentYear}`

    footer.appendChild(companyInfoFooter)
    footer.appendChild(socialMediaFooter)
    footer.appendChild(copyright)

    return footer
  }

  // ❗ DOM creation using your `buildFooter` component (do not change):
  document.body.appendChild(buildFooter({
    companyName: 'Bloom Institute of Technology',
    address: '123 Main Street, City, Country',
    contactEmail: 'info@example.com',
    socialMedia: {
      twitter: 'https://twitter.com/example',
      facebook: 'https://www.facebook.com/example',
      instagram: 'https://www.instagram.com/example',
    },
  }))

  // 👉 TASK 4 - Clicking on the section should deactivate the active card

  //  ✨ do your magic here

  document.addEventListener('click', evt => {
    if (evt.target === document.querySelector('section')) {
      const learners = document.querySelectorAll('.learner-card')
      learners.forEach(card => card.classList.remove('active'))
    }
  })


}

// ❗ DO NOT CHANGE THIS CODE
// ❗ DO NOT CHANGE THIS CODE
// ❗ DO NOT CHANGE THIS CODE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject3 }
else moduleProject3()
