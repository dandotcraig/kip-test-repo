import React from 'react'
import { Container } from '../container'
import { Heading } from './heading'
import { Star } from '../../icons/star'
import { Paragraph } from './paragraph'
import Google from '../../icons/google'
import { ReviewCardsData } from '../../../data/reviewCardsData'


const ReviewCards: React.FC<any> = (data) => {
 const filteredReviewCards = ReviewCardsData.slice(0, 3);

    return (
        <div>
            <Container>
                <div className='sm:flex hidden flex-wrap gap-[48px] px-2 my-[48px] ' >
                    {ReviewCardsData?.map((item: any, index: any) => {
                        return (
                            <div key={index} className='  max-w-[100%] md:max-w-[325px] lg:max-w-[274px] xl:max-w-[400px]  mx-auto p-[16px] xl:p-[24px] rounded-xl  shadow-xl' >
                                <div className='flex justify-between items-center' >
                                    <Heading size='h6' as='h3' className='xl:text-[25px]' >{item?.title}</Heading>
                                    <Google />
                                </div>
                                <div className='flex gap-0 mt-[8px]' >
                                    <Star width="16" height="16" />
                                    <Star width="16" height="16" />
                                    <Star width="16" height="16" />
                                    <Star width="16" height="16" />
                                    <Star width="16" height="16" />
                                </div>
                                <div className='mt-[8px]' >
                                    <Paragraph className='text-[14px] xl:text-[20px] ' >{item?.description}</Paragraph>
                                </div>

                            </div>
                        )
                    })}
                </div>
                <div className='sm:hidden flex flex-wrap gap-[48px] px-2 my-[48px] '  >
                {filteredReviewCards?.map((item: any, index: any) => {
                        return (
                            <div key={index} className='  max-w-[100%] md:max-w-[325px] lg:max-w-[274px] xl:max-w-[400px]  mx-auto p-[16px] xl:p-[24px] rounded-xl  shadow-xl' >
                                <div className='flex justify-between items-center' >
                                    <Heading size='h6' as='h3' className='xl:text-[25px]' >{item?.title}</Heading>
                                    <Google />
                                </div>
                                <div className='flex gap-0 mt-[8px]' >
                                    <Star width="16" height="16" />
                                    <Star width="16" height="16" />
                                    <Star width="16" height="16" />
                                    <Star width="16" height="16" />
                                    <Star width="16" height="16" />
                                </div>
                                <div className='mt-[8px]' >
                                    <Paragraph className='text-[14px] xl:text-[20px] ' >{item?.description}</Paragraph>
                                </div>

                            </div>
                        )
                    })}
                </div>
            </Container>
        </div>
    )
}

export default ReviewCards
