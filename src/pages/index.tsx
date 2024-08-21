import React from 'react'
import { NavItems, NavPopover } from '@/components/Header'
import styles from './index.module.css'
import clsx from 'clsx'
import { ThemeToggle } from '@/components/ThemeToggle'
import socialCardLarge from '@/img/social-card-large.jpg'
import Config from 'Config'
import MetaTitle from '@/utils/Meta/MetaTitle'
import Logo from '@/components/Logos/Logo/Logo'
import { GitHubIcon } from '@brandonowens/elegant-ui'
import Image from 'next/image'
import { useScreenSize } from '@/hooks/useScreenSize'
import Head from 'next/head'
import { BsTwitterX, BsLinkedin } from 'react-icons/bs'

const IMAGE_WIDTH = 300

Home.layoutProps = {
  meta: {
    ogImage: socialCardLarge.src,
    title: MetaTitle(Config('app.name'), Config('app.tagline')),
  },
  stickyHeader: false,
}

export default function Home() {
  return (
    <>
      <div className="overflow-hidden">
        <Header />
      </div>
    </>
  )
}

interface FigureProps {
  src: string
  alt: string
  num: number
  description: string | any
}

const Figure: React.FC<FigureProps> = (props) => {
  const { src, alt, num, description } = props

  const { medium } = useScreenSize()

  return (
    <div>
      <Image
        src={src}
        alt={alt}
        width={IMAGE_WIDTH}
        height={IMAGE_WIDTH}
        className={clsx('rounded-lg', 'shadow-2xl')}
      />
      {medium && (
        <div
          className={clsx(
            'mt-1',
            'text-center',
            'lg:text-lg',
            'dark:text-neutral-300 text-slate-900',
            'font-medium'
          )}
        >
          <span className={clsx('font-semibold')}>Figure {num}:</span> {description}
        </div>
      )}
    </div>
  )
}

const LINK_CLASSES = clsx('text-sky-500 dark:text-sky-400', 'underline')

/**
 * Render a header component for the splash page
 * @returns A Header component
 */
const Header = () => {
  const { medium } = useScreenSize()

  return (
    <React.Fragment>
      <Head>
        <title>Danny Geisz</title>
      </Head>
      <header className="relative">
        <div className="px-4 sm:px-6 md:px-8">
          <div
            className={clsx(
              'absolute inset-0 bottom-0 bg-bottom bg-no-repeat bg-slate-50 dark:bg-[#0B1120]',
              styles.beams
            )}
          >
            <div
              className="absolute inset-0 bg-[bottom_1px_center] dark:bg-bottom dark:border-b dark:border-slate-100/5"
              style={{
                maskImage: 'linear-gradient(to bottom, transparent, black)',
                WebkitMaskImage: 'linear-gradient(to bottom, transparent, black)',
              }}
            />
          </div>
          <div className="relative pt-6 lg:pt-8 flex items-center justify-between text-slate-700 font-semibold text-sm leading-6 dark:text-slate-200">
            <Logo className="w-auto h-7" />
            <div className="flex items-center">
              <NavPopover className="-my-1 ml-2 -mr-1" display="md:hidden" />
              <div className="hidden md:flex items-center">
                <nav>
                  <ul className="flex items-center gap-x-8">
                    <NavItems />
                  </ul>
                </nav>
                <div className="flex items-center border-l border-slate-200 ml-6 pl-6 dark:border-slate-800">
                  <ThemeToggle />
                  {Config('app.repository').length > 0 && (
                    <a
                      href={Config('app.repository')}
                      className="ml-6 block text-slate-400 hover:text-slate-500 dark:hover:text-slate-300"
                      target="_blank"
                    >
                      <span className="sr-only">{Config('app.name')} on GitHub</span>
                      <GitHubIcon className="w-5 h-5 text-slate-400 hover:text-slate-500 dark:hover:text-slate-300" />
                    </a>
                  )}
                  <a
                    href={'https://twitter.com/danny_nkjg'}
                    className="ml-6 block text-slate-400 hover:text-slate-500 dark:hover:text-slate-300"
                    target="_blank"
                  >
                    <span className="sr-only">{Config('app.name')} on GitHub</span>
                    <BsTwitterX
                      size={16}
                      className=" text-slate-400 hover:text-slate-500 dark:hover:text-slate-300"
                    />
                  </a>
                  <a
                    href={'https://www.linkedin.com/in/danny-geisz-91a170192/'}
                    className="ml-6 block text-slate-400 hover:text-slate-500 dark:hover:text-slate-300"
                    target="_blank"
                  >
                    <span className="sr-only">{Config('app.name')} on GitHub</span>
                    <BsLinkedin
                      size={16}
                      className=" text-slate-400 hover:text-slate-500 dark:hover:text-slate-300"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <main className="flex min-h-[92vh] flex-col items-center justify-between p-0 pt-24 md:p-24">
            <div className="z-10 max-w-5xl w-full justify-between text-sm flex flex-col">
              <div className="dark:text-white text-slate-900 text-3xl md:text-5xl font-semibold">
                Hey, friend! I'm Danny :)
              </div>
              <div className={clsx('flex items-center', 'self-center')}>
                <div className={clsx(medium && 'grid grid-cols-3 gap-4 md:gap-12', 'mt-16')}>
                  <Figure
                    src={'/headshot.jpg'}
                    alt={'linkedin'}
                    num={1}
                    description={
                      <>
                        Responsible <br />
                        LinkedIn Headshot
                      </>
                    }
                  />
                  {medium && (
                    <>
                      <Figure
                        src={'/in_the_wild.png'}
                        alt={'in-the-wild'}
                        num={2}
                        description={'In the Wild'}
                      />
                      <Figure
                        src={'/my_mind.png'}
                        alt={'in-the-wild'}
                        num={3}
                        description={
                          <>
                            My Mind <br /> (Artistic Depiction)
                          </>
                        }
                      />
                    </>
                  )}
                </div>
              </div>

              <div className={clsx('mt-8', 'text-lg', 'text-neutral-950 dark:text-slate-200')}>
                Nice to meet you! Well, of course we're not actually meeting — perhaps the more
                accurate term for this would be consensual and actively encouraged internet
                stalking. Emphasis on <i>actively encouraged</i>! I'm Danny, and at the present
                moment I'm obsessed with bringing AI and formal methods into a perfect and holy
                union before God and Man.
                <br />
                <br />
                Before this, I reverse-engineered LLMs using sparse coding methods through{' '}
                <a href={'https://www.matsprogram.org/'} className={LINK_CLASSES}>
                  MATS
                </a>
                , I{' '}
                <a href={'https://en.wikipedia.org/wiki/Portuguese_Way'} className={LINK_CLASSES}>
                  walked 175 miles
                </a>{' '}
                from Portugal to Spain, I researched Agentic Systems at{' '}
                <a href={'https://imbue.com'} className={LINK_CLASSES}>
                  Imbue AI
                </a>
                , I built instantaneous search for{' '}
                <a href={'https://remnote.com'} className={LINK_CLASSES}>
                  Remnote
                </a>
                , I watched{' '}
                <a href={'https://arxiv.org/abs/2303.15438'} className={LINK_CLASSES}>
                  eigenvalues have a baby with contrastive learning
                </a>{' '}
                at the{' '}
                <a href={'https://redwood.berkeley.edu/'} className={LINK_CLASSES}>
                  Redwood Center
                </a>
                , I built{' '}
                <a className={LINK_CLASSES} href={'https://zymbolicmath.com'}>
                  Zymbolic
                </a>{' '}
                (ie the most delectable way to type math documents), I made some{' '}
                <a href={'https://www.cubeduniverse.com/mario'} className={LINK_CLASSES}>
                  really cool virtual Rubik's Cubes
                </a>
                , I tried and failed to find God in the Swiss Alps at{' '}
                <a href={'https://labri.org/swiss/'} className={LINK_CLASSES}>
                  L'Abri
                </a>
                , I built way too many{' '}
                <a href={'https://www.playdigitari.com/'} className={LINK_CLASSES}>
                  social media platforms
                </a>{' '}
                and did{' '}
                <a href={'https://www.zfellows.com/'} className={LINK_CLASSES}>
                  ZFellows
                </a>
                , I got mad at backprop during COVID and rage-coded a bunch of experiments in fast{' '}
                <a href={'https://github.com/DGeisz/CodeX'} className={LINK_CLASSES}>
                  sparse coding and invariant feature distillation
                </a>
                , and I studied physics and CS at{' '}
                <a href={'https://emojipedia.org/pile-of-poo'} className={LINK_CLASSES}>
                  Berkeley
                </a>
                .
                <br />
                <br />I actually have{' '}
                <a href={'https://exfizzassist.com'} className={LINK_CLASSES}>
                  another blog
                </a>{' '}
                which I made years ago. There you can find a range of juicer, less technical
                content, ranging from discussions about{' '}
                <a
                  href={'https://exfizzassist.com/posts/explosive-continuity/'}
                  className={LINK_CLASSES}
                >
                  the stable propagation of entities
                </a>{' '}
                to a{' '}
                <a
                  href={
                    'https://exfizzassist.com/posts/a-confession-of-my-passionate-love-for-grimes/'
                  }
                  className={LINK_CLASSES}
                >
                  love letter to Grimes
                </a>
                . I'll probably keep putting angsty, artsy, philosophical stuff there and more
                technical stuff here. Cheers!
              </div>
              {!medium && <div style={{ height: 100 }} />}
            </div>
          </main>
        </div>
      </header>
    </React.Fragment>
  )
}
