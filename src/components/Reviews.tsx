import { REVIEW_LIST } from "../constants/reviews.constant";
import { StringConstant } from "../constants/string.constant";
import Icon from "../core/Icon";
import { Review } from "../model/Review";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

const Reviews = () => {
  const reviews: Review[] = REVIEW_LIST;

  return (
    <section className='py-20 bg-amber-50'>
      <h2 className='heading-2 text-center mb-12'>
        {StringConstant.reviewHeading}
      </h2>
      <section className='reviews maxwidth mx-auto px-4'>
        {reviews.map((review) => (
          <Card className='max-w-lg text-center' key={review.fullName}>
            <span className='quo_open text-slate-300'>&ldquo;</span>
            <CardHeader>
              <CardTitle className='uppercase text-amber-400'>
                {review.fullName}
              </CardTitle>
              <CardDescription>{review.position}</CardDescription>
            </CardHeader>
            <CardContent>
              <hr className='w-10 mx-auto mb-4 bg-amber-400 h-[2px] border-none' />
              <p className='review-text'>{review.review}</p>
              <div className='flex items-center justify-center gap-4 pt-4'>
                {Array.from({ length: 5 }, (_, index) => index + 1).map(
                  (num) => (
                    <Icon
                      name={"star"}
                      size={1}
                      color='#ffc107'
                      key={num}
                    ></Icon>
                  )
                )}
              </div>
            </CardContent>
            <CardFooter className='flex justify-between'></CardFooter>
            <span className='quo_close text-slate-300'>&rdquo;</span>
          </Card>
        ))}
      </section>
    </section>
  );
};

export default Reviews;
