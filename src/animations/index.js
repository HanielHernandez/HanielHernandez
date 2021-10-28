import { gsap } from 'gsap'
import mywork from './mywork'
export default {
  mywork,
  home: {
    onEnter: (el, done) => {
      console.log('Entra ala animación', el, done)
      const tl = gsap.timeline({
        onComplete: done
      })
      tl.from(
        '#rightSide >*',
        {
          stagger: 0.1,
          opacity: 0,
          x: -30,
          duration: 1,
          ease: 'back.inOut(10)'
        },
        0
      )
      tl.from(
        '.graph',
        {
          opacity: 0,
          scale: 0,
          duration: 1,
          ease: 'back.inOut(1.7)'
        },
        0
      )

      tl.play()
    },
    onLeave: (el, done) => {
      console.log('Sale de la animación', el, done)
      const tl = gsap.timeline({
        onComplete: done
      })
      tl.to(
        '#rightSide >*',
        {
          stagger: 0.1,
          opacity: 0,
          x: -30,
          duration: 1,
          ease: 'back.inOut(10)'
        },
        0
      )
      tl.to(
        '.graph',
        {
          opacity: 0,
          scale: 0,
          duration: 1,
          ease: 'back.inOut(1.7)'
        },
        0
      )

      tl.play()
    }
  },
  about: {
    onEnter: (el, done) => {
      const tl = gsap.timeline({
        onComplete: done
      })
      tl.from(
        '.left-side-image',
        {
          x: -300,
          ease: 'ease-in',
          duration: 0.3
        },
        0
      )
      tl.from(
        '.title, .description',
        {
          height: '0px',
          overflow: 'hidden',
          duration: 0.5
        },
        0
      )
      tl.to(
        '.left-side-image .background',
        {
          y: -10,
          x: -10,
          ease: 'ease-in-out',
          duration: 0.3
        },
        0.75
      )
      tl.to(
        '.left-side-image .content',
        {
          y: 10,
          x: 10,
          ease: 'ease-in-out',
          duration: 0.3
        },
        0.75
      )
      tl.play()
    },
    onLeave: (el, done) => {
      console.log('Sale de la animación', el, done)
      setTimeout(done, 1)
    }
  }
}
