// import Article1 from '../src/assets/Article_Img1.PNG';
import Art from '../../assets/Article_Img1.PNG';
//src/assets/Article_Img1.PNG


const ArticleView = () => {
  return (
    <div>
        <div>
        <h1 className='text-center mt-14 text-6xl mr-20 font-serif font-semibold text-gray-900'>UNDERSTANDING<br/>
        DIABETES: </h1>
       <div className='mr-44'>
       <img src={Art} alt='Healthy Food' className='ml-20 w-full' /> </div>      
            
        </div>
        
        
        <div className='ml-20 text-xs mr-20 font-sans text-gray-900'>
            <p className='mb-6 mt-5'> Diabetes is a chronic condition that affects how your body processes glucose, a type of sugar that serves as a primary energy source. There are two main types: Type 
1 diabetes, where the body does not produce insulin, and Type 2 diabetes, where the body does not use insulin effectively. Understanding and managing diabetes is 
crucial for maintaining health and preventing complications</p>
<p className='mb-6'>
A key aspect of managing diabetes is through proper nutrition. Eating a balanced diet helps control blood sugar levels and can prevent or delay the onset of 
complications. Focus on incorporating whole grains, lean proteins, healthy fats, and plenty of vegetables into your meals. Foods rich in fiber, such as fruits, vegetables, 
and legumes, are particularly beneficial as they help regulate blood sugar levels
</p>
<p className='mb-6'>
Monitoring carbohydrate intake is also essential. Carbohydrates impact blood glucose more than other nutrients, so it's important to understand how to balance your 
meals and choose low-glycemic index foods that have a gradual effect on blood sugar levels. Portion control and meal timing can further aid in stabilizing blood 
sugar
</p>

<p className='mb-6' >
Regular physical activity is another cornerstone of diabetes management. Exercise helps improve insulin sensitivity and lowers blood glucose levels. Aim for at least 
150 minutes of moderate aerobic activity per week, combined with strength training exercises.
</p>

<p className='mb-6'>
Regular monitoring of blood glucose levels is crucial for managing diabetes. Keeping track of your levels helps you understand how different foods and activities 
affect your blood sugar and allows for timely adjustments to your treatment plan
</p>

<p className='mb-6'>
Additionally, maintaining a healthy weight and avoiding smoking can significantly benefit your overall health and diabetes management. Consult with healthcare 
professionals regularly to tailor a management plan specific to your needs and make adjustments as necessary
</p>
<p className='mb-6'>
By embracing a healthy lifestyle that includes a balanced diet, regular exercise, and consistent monitoring, individuals with diabetes can effectively manage their 
condition and lead a fulfilling life. Understanding diabetes and making informed choices about your health can make a significant difference in managing this 
condition and improving your overall well-being
</p>
        </div>

    </div>
  )
}

export default ArticleView

