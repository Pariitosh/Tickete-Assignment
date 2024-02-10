
import { Flex, Title,Text, TextInput, Button, Divider,em } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks';import './App.css'

function App() {
  const isMobile = useMediaQuery(`(max-width: ${em(750)})`);  return (
   <>
   <Flex h={'7em'} w={'100vw'} bg={'white'} justify={'center'} align={'center'}>
    <Flex h={'100%'} w={'90%'} bg={'white'} align={'center'} justify={'space-between'}>
      <Title>Tickete</Title>
      <Title style={{color:"grey"}} order={4} fw={600}>Checkout</Title>
      <Title style={{color:"grey"}} order={4}>Help</Title>
    </Flex>
   </Flex>
   <Flex h={'3em'} w={'100vw'} bg={'black'} align={'center'} justify={'center'}>
    <Text style={{color:"white"}} size='lg' order={3}>Holding your tickets for 30.00</Text>
   </Flex>
   <Flex w={'100vw'} h={'140em'}  justify={'center'} >
    <Flex w={'90%'}  direction={isMobile?"column-reverse":'row'} align={isMobile?"center":''} >
    <Flex w={'70%'}  direction={'column'}>
      <Title style={{fontSize:'4em'}} fw={600}>Confirm & pay</Title>
      <Flex mt={isMobile?'10%':'4%'} direction={'column'} justify={'center'} h={'6%'} w={'100%'} style={{border:'1px solid #d3d4db',borderRadius:'10px'}}>
        <Title ml={'2%'} order={3} fw={600}>Free cancellation</Title>
        <Title ml={'2%'} style={{color:'#878a90'}} order={3} fw={500}>Tickets can be cancelled by 13th december, 2022.</Title>
      </Flex>

      <Title mt={'4%'} fw={600}>Enter your details</Title>
      <Title mt={'1%'} order={3} style={{color:'#878a90'}} fw={500}> We'll be sending your tickets to the details below, Booking for a friend? Add their details.</Title>
      <Flex mt={'4%'}  w={'100%'}  wrap={'wrap'} justify={'space-between'} >
        <TextInput placeholder='Full name *' radius={'md'} size='xl' w={'100%'} ></TextInput>
        <TextInput style={{border:'1px solid #cbccd4',borderRadius:"15px"}} mt={'2%'} placeholder='Country code *'  size='xl' w={'48%'} ></TextInput>
        <TextInput style={{border:'1px solid #cbccd4',borderRadius:"15px"}} mt={'2%'} placeholder='Phone Number *' size='xl' w={'48%'} ></TextInput>
        <TextInput style={{border:'1px solid #cbccd4',borderRadius:"15px"}} mt={'2%'} placeholder='Email *' size='xl' w={'48%'} ></TextInput>
        <TextInput style={{border:'1px solid #cbccd4',borderRadius:"15px"}} mt={'2%'} placeholder='Confirm email *' size='xl' w={'48%'} ></TextInput>
      </Flex>

      <Title mt={'4%'} fw={600}>Additional information</Title>
      <Title mt={'1%'} order={3} style={{color:'#878a90'}} fw={500}>We need a few more details to complete your reservation</Title>
      <Flex mt={'4%'} w={'100%'} wrap={'wrap'} justify={'space-between'}  >
        <TextInput style={{border:'1px solid #cbccd4',borderRadius:"15px"}} placeholder='Input label *'  size='xl' w={'48%'} ></TextInput>
        <TextInput style={{border:'1px solid #cbccd4',borderRadius:"15px"}} placeholder='Select *'  size='xl' w={'48%'} ></TextInput>
        <TextInput mt={'2%'} placeholder='Multiselect*' radius={'md'} size='xl' w={'100%'} ></TextInput>
      </Flex>

      <Title mt={'4%'} fw={600}>Select your mode of payment</Title>
      <Title mt={'1%'} order={3} style={{color:'#878a90'}} fw={500}>Payments with tickete are secured and encrypted</Title>
      <Flex mt={'3%'} style={{borderRadius:"15px",border:'1px solid black'}} w={'100%'} direction={'column'}>
        <Title ml={'2%'} mt={'2%'} order={4}>Credit & debit card</Title>
        <Flex  ml={'2%'} mt={'2%'} w={'100%'}>
          <Text>VISA</Text>
          <Text>VISA</Text>
          <Text>VISA</Text>
        </Flex>
        <Flex mt={'2%'}  w={'100%'} wrap={"wrap"}>
          <TextInput ml={'1.5%'} style={{border:'1px solid #cbccd4',borderRadius:"15px"}} size='xl' placeholder='Name on card *' w={'48%'}></TextInput>
          <TextInput ml={'1.5%'} style={{border:'1px solid #cbccd4',borderRadius:"15px"}} size='xl' placeholder='Card number *' w={'48%'}></TextInput>
          <TextInput ml={'1.5%'} mt={'2%'} style={{border:'1px solid #cbccd4',borderRadius:"15px"}} size='xl' placeholder='Expiry date *' w={'48%'}></TextInput>
          <TextInput ml={'1.5%'} mt={'2%'} style={{border:'1px solid #cbccd4',borderRadius:"15px"}} size='xl' placeholder='<CVV/CCV> *' w={'48%'}></TextInput>
        </Flex>
        <Title  mt={'3%'} ml={'2%'} order={3}>Total payable: $XXX </Title>
        <Title style={{color:'#60646c',textDecoration:"underline"}}  mt={'1%'} ml={'2%'} order={4} fw={500}>You will be charged in AED </Title>
        <Title  mt={'3%'} ml={'2%'} order={4} fw={600}>By clicking confirm and pay, you agree to Ticket's general terms and conditions and cancellation policy </Title>
        <Button mb={'2%'} mt={'3%'} color='black' ml={'2%'} size='xl' radius={'lg'} w={'20%'}>Confirm & pay</Button>
      </Flex>

      <Flex mt={'4%'} direction={'column'} justify={'center'} h={'3%'} w={'100%'}  style={{border:'1px solid #d3d4db',borderRadius:'10px'}}>
        <Title ml={'2%'} style={{color:'#878a90'}} order={3} fw={500}>Apple pay Coming soon</Title>
      </Flex>
      <Flex mt={'2%'} direction={'column'} justify={'center'} h={'3%'} w={'100%'} style={{border:'1px solid #d3d4db',borderRadius:'10px'}}>
        <Title ml={'2%'} style={{color:'#878a90'}} order={3} fw={500}>Google pay Coming soon</Title>
      </Flex>

      <Title fw={600} mt={'4%'}>Totale Payable: $XXX</Title>
      <Flex mt={'2%'} direction={'column'} justify={'center'} h={'5%'} w={'100%'} style={{border:'1px solid #d3d4db',borderRadius:'10px'}}>
        <Title ml={'2%'} order={3} fw={600}>You will be charged in AED</Title>
        <Title ml={'2%'} style={{color:'#878a90'}} order={3} fw={500}>The prices shown here are in USD , As per current conversion you will be charged in AED</Title>
      </Flex>
    </Flex>
      <Flex ml={'3%'} style={{border:'1px solid grey',borderRadius:"20px"}} mt={'1%'} w={isMobile?'70%':'30%'} h={'60em'} justify={'center'} align={'center'}>
        <Flex w={'90%'} h={'100%'}  direction={'column'}>
          <img style={{marginTop:"4%" ,height:'30%'}} src={'pic.png'}  fit='contain' w={'auto'}></img>
          <Title mt={'2%'} order={4} fw={600}> Amsterdam open boat canal cruise - Live Guiye - from Anne Frank House</Title>
          <Title  mt={'2%'} order={4} fw={600}> ticket type - variant</Title>
          <Title  mt={'2%'} order={4} fw={600}> day, month date</Title>
          <Title  mt={'2%'} order={4} fw={600}> Time</Title>
          <Title  mt={'2%'} order={4} fw={600}> 5 guests</Title>
          <Divider mt={'3%'} variant='dotted'color='grey' ></Divider>
          <Title mt={'3%'}  fw={600} order={3}> View payment summary</Title>
          <Divider mt={'3%'} color='grey' ></Divider>
          <Flex h={'10%'} w={'100%'}  justify={'space-between'} align={'center'}>
            <Title fw={600} order={2}>Total payable</Title>
            <Title fw={600} order={2}>$XXX</Title>
          </Flex>
          <Title mt={'2%'} order={4} style={{color:'green'}} fw={500}> You saved price</Title>
          <Title mt={'3%'} style={{color:'#60646c',textDecoration:"underline"}}  order={4} fw={600}>You will be charged in AED </Title>
          <Title mt={'3%'} style={{color:'#60646c'}}  order={4} fw={500}>By clicking “confirm & pay”, you agree to Tickete’s general terms and conditions and cancellation policy. </Title>
          <Button mt={'5%'} size='lg' color='black' w={'60%'} radius={'md'} style={{alignSelf:"center"}}> Confirm & Pay</Button>
        </Flex>
      </Flex>
    </Flex>

    
   </Flex>
   <Flex w={'100vw'} h={'55em'}  justify={'center'}>
    <Flex w={'90%'} h={'50em'} >
      <Flex w={'40%'} h={'50em'}  direction={'column'}>
      <Title mt={'4%'} fw={600}>Frequently asked questions</Title>
      <Title mt={'1%'} order={3} style={{color:'#878a90'}} fw={500}>Here are some of our most asked questions. </Title>
      <Title order={3} mt={'6%'} fw={600}>Still need help? We're here for you</Title>
      <Button color='black' w={'20%'} size='lg' radius={'md'} mt={'2%'}> Chat with us</Button>
      </Flex>
      <Flex w={'60%'} h={'50em'}  direction={'column'}>
      <Flex mt={'2%'} direction={'column'} justify={'center'} h={'10%'} w={'100%'}  style={{border:'1px solid #d3d4db',borderRadius:'10px'}}>
        <Title ml={'2%'} order={3} fw={600}>+   What should I do on my first trip to Rome?</Title>
      </Flex>
      <Flex mt={'4%'} direction={'column'} justify={'center'} h={'30%'} w={'100%'}  style={{border:'1px solid #d3d4db',borderRadius:'10px'}}>
        <Title ml={'2%'} order={3} fw={600}>+   What should I do on my first trip to Rome?</Title>
        <Title style={{color:'#878a90'}} mt={'2%'} order={4} fw={500} ml={'4.5%'}>Rome is packed with hidden gems. If you love art, don't miss the Galleria Doria Pamphilj or Palazzo 
          Barberini. The Museo Barracco is a free museum and well worth a quick visit. If you love the ancient stuff, 
          don't miss the Domus Romana at Palazzo Valentini, the Domus Aurea, and the Baths of Caracalla. For even more 
          hidden gems, take a tour of Trastevere, a fascinating neighborhood full of history and ambiance.</Title>
      </Flex>
      <Flex mt={'4%'} direction={'column'} justify={'center'} h={'10%'} w={'100%'}  style={{border:'1px solid #d3d4db',borderRadius:'10px'}}>
        <Title ml={'2%'} order={3} fw={600}>+   How much time should I spend in Rome?</Title>
      </Flex>
      <Flex mt={'4%'} direction={'column'} justify={'center'} h={'10%'} w={'100%'}  style={{border:'1px solid #d3d4db',borderRadius:'10px'}}>
        <Title ml={'2%'} order={3} fw={600}>+   What food is Rome known for?</Title>
      </Flex>
      <Flex mt={'4%'} direction={'column'} justify={'center'} h={'10%'} w={'100%'} style={{border:'1px solid #d3d4db',borderRadius:'10px'}}>
        <Title ml={'2%'} order={3} fw={600}>+   What is the best way to get around Rome?</Title>
      </Flex>
      </Flex>
    </Flex>
   </Flex>
   <Flex h={'20rem'} w={'100vw'} bg={'black'} direction={'column'}>
    <Flex style={{color:'white'}}  w={'100%'} h={'70%'}  ml={'5%'} align={'center'}>
      <Title style={{fontSize:"3em"}}>Tickete</Title>
    </Flex>
    <Divider color='#26272a'></Divider>
    <Flex ml={'5%'} w={'50%'} h={'30%'} align={'center'} justify={'space-between'} >
      <Text style={{color:'#878a90'}} fw={'600'}>Made with</Text>
      <Text style={{color:'#878a90'}} fw={'600'}>Privacy policy</Text>
      <Text style={{color:'#878a90'}} fw={'600'}>Terms of usage</Text>
      <Text style={{color:'#878a90'}} fw={'600'}>Cancellation policy</Text>
      <Text style={{color:'#878a90'}} fw={'600'}>site map</Text>
      <ul></ul>
    </Flex>
   </Flex>
   </>
  )
}

export default App
