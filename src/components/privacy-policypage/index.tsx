import React from 'react'
import { Section } from '../shared/section'
import { Container } from '../shared/container'
import { Heading } from '../shared/ui/heading'


export const PrivacyPolicyPage = ({data}:any) => {
    return (
        <Section>
            <Container  className='my-12 '>
                <Heading size='h1'  className='text-dark-green uppercase  pb-10'>Privacy Policy</Heading>
                <div className='privacy-policy-wraper' dangerouslySetInnerHTML={{ __html: data}}></div>
            </Container>
        </Section>
    )
}
