
import React from 'react'
import cxs from 'cxs'
import Box from './Box'
import { breakpoints } from './config'

const Feature = ({ title, description }) => (
  <Box className={cx.feature}>
    <h3 className={cx.featureTitle}>{title}</h3>
    <p className={cx.featureDescription}>{description}</p>
  </Box>
)

const features = [
  {
    title: 'Atomic Rulesets',
    description: 'CXS uses atomic, utility styles and a multiclass pattern to maximize deduplication.'
  },
  {
    title: 'Deduplication',
    description: 'Rulesets are generated at a per-declaration level so that stylesheets remain as small as possible.'
  },
  {
    title: 'Dead Code Elimination',
    description: 'Only styles passed to CXS are rendered, which ensures styles are removed when they are no longer used.'
  },
  {
    title: 'Framework Agnostic',
    description: 'CXS is written in plain es6 and works with any JavaScript library.'
  },
  {
    title: 'Server Side Rendering',
    description: 'The functional nature of CXS means that server side rendering just works and all classnames stay consistent across renders.'
  },
  {
    title: 'Only 6 KB',
    description: 'Built to be lean, CXS won‘t add much to your bundle size, and can lead to smaller bundle sizes than using plain CSS.'
  },
  {
    title: 'The Power of CSS in JS',
    description: 'Use native JavaScript objects, numbers, functions, and more, without the need to escape in and out of embedded DSLs.'
  },
  {
    title: 'Pseudoclasses, Media Queries, and More',
    description: 'CXS can handle the most useful parts of CSS without adding window size or mouse event listeners.'
  },
]

export default () => (
  <section className={cx.root}>
    {features.map((f, i) => (
      <Feature key={i} {...f} />
    ))}
  </section>
)

const cx = {
  root: cxs({
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'baseline',
  }),
  feature: cxs({
    width: '100%',
    [breakpoints[1]]: {
      width: '50%'
    },
    [breakpoints[2]]: {
      width: '25%'
    }
  }),
  featureTitle: cxs({
    fontSize: 24,
    fontWeight: 600,
    lineHeight: 1.25,
    margin: 0,
    marginBottom: 8,
  }),
  featureDescription: cxs({
    margin: 0,
  })
}

