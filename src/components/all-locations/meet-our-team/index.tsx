import React, { FC } from 'react'
import { Section } from '../../shared/section'
import { Container } from '../../shared/container'
import { Heading } from '../../shared/ui/heading'
import { Paragraph } from '../../shared/ui/paragraph'
import { IMeetOurTeamsCard } from './interfaces'
import { OurTeamsCards } from './our-teams-cards'
interface Props {
    data: IMeetOurTeamsCard[];
}

export const MeetOurTeam: FC<Props> = ({ data }: any) => {
    return (
        <Section>
            <Container className='p-6'>
                <Heading
                    size="h2"
                    className="text-green-slate-800 leading-12 font-bold text-center font-mabry-pro"
                >
                    Meet our Team!</Heading>
                <Paragraph className='mt-4'>
                    Leaving your dog in capable hands while you're away brings peace of mind. With our experienced staff, secure facility, and open communication, you can feel confident that your dog is well-cared for during their time with us.
                </Paragraph>
            </Container>
            <OurTeamsCards data={data} />
        </Section>
    )
}
