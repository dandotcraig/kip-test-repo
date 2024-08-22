import React, { FC } from 'react'
import { Section } from '../shared/section'
import { Container } from '../shared/container'
import { Heading } from '../shared/ui/heading'

export const TermsAndCondition = ({data}:any) => {
  return (
    <Section>
        <Container >
            <Heading size='h1' className='text-dark-green uppercase pt-12 pb-10'>Terms and Conditions</Heading>
            <div className='terms-and-condition-wraper' dangerouslySetInnerHTML={{ __html: data}}></div>
        </Container>
    </Section>
  )
}
