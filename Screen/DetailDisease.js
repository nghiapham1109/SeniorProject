/* eslint-disable prettier/prettier */
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  ScrollView,
  useWindowDimensions,
} from 'react-native';
import React, {useState, useEffect} from 'react';
// import {useWindowDimensions} from 'react-native';
// import RenderHtml from 'react-native-render-html';
import RenderHTML from 'react-native-render-html';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useRoute} from '@react-navigation/native';
// const html = `
// <p>An abdominal aortic aneurysm is an enlarged area in the lower part of the aorta, the major blood vessel that supplies blood to the body. The aorta, about the thickness of a garden hose, runs from your heart through the center of your chest and abdomen. Because the aorta is the body's main supplier of blood, a ruptured abdominal aortic aneurysm can cause life-threatening bleeding.</p>
// <p>Depending on the size and rate at which your abdominal aortic aneurysm is growing, treatment may vary from watchful waiting to emergency surgery. Once an abdominal aortic aneurysm is found, doctors will closely monitor it so that surgery can be planned if it's necessary. Emergency surgery for a ruptured abdominal aortic aneurysm can be risky.</p>
// <p>Abdominal aortic aneurysms often grow slowly and usually without symptoms, making them difficult to detect. Some aneurysms will never rupture. Many start small and stay small, although many expand over time. Others expand quickly. Predicting how fast an abdominal aortic aneurysm may enlarge is difficult.</p><p>As an abdominal aortic aneurysm enlarges, some people may notice:</p><ul> <li>A pulsating feeling near the navel</li> <li>Deep, constant pain in your abdomen or on the side of your abdomen</li> <li>Back pain</li></ul><h3>When to see a doctor</h3><p>You should see your doctor if you have any of the symptoms listed above.</p><p>Anyone age 60 and older who has risk factors for developing an abdominal aortic aneurysm, such as smoking or a family history of abdominal aortic aneurysm, should consider regular screening for the condition. Because being male and smoking significantly increase the risk of abdominal aortic aneurysm, men ages 65 to 75 who have ever smoked cigarettes should have a one-time screening for abdominal aortic aneurysm using abdominal ultrasound.</p><p>If you have a family history of abdominal aortic aneurysm, your doctor may recommend an ultrasound exam to screen for the condition.</p><p>There are no specific screening recommendations for women. Ask your doctor if you need to have an ultrasound screening based on your risk factors.</p>
// <p>Most aortic aneurysms occur in the part of your aorta that's in your abdomen. Although the exact cause of abdominal aortic aneurysms is unknown, a number of factors may play a role, including:</p>
//  <ul>
//   <li><strong>Tobacco use.</strong> Cigarette smoking and other forms of tobacco use appear to increase your risk of aortic aneurysms. In addition to the damaging effects that smoking causes directly to the arteries, smoking contributes to the buildup of fatty plaques in your arteries (atherosclerosis) and high blood pressure. Smoking can also cause your aneurysm to grow faster by further damaging your aorta.</li>
//   <li><strong>Hardening of the arteries (atherosclerosis).</strong> Atherosclerosis occurs when fat and other substances build up on the lining of a blood vessel, increasing your risk of an aneurysm.</li>
//   <li><strong>Infection in the aorta (vasculitis).</strong> In rare cases, abdominal aortic aneurysm may be caused by an infection or inflammation that weakens a section of the aortic wall.</li>
//  </ul>
//  <p>Aneurysms can develop anywhere along the aorta, but when they occur in the upper part of the aorta, they are called thoracic aortic aneurysms. More commonly, aneurysms form in the lower part of your aorta and are called abdominal aortic aneurysms. These aneurysms may also be referred to as AAA or triple A.</p>
//  <p>Abdominal aortic aneurysm risk factors include:</p><ul> <li><strong>Age.</strong> Abdominal aortic aneurysms occur most often in people age 65 and older.</li> <li><strong>Tobacco use.</strong> Tobacco use is a strong risk factor for the development of an abdominal aortic aneurysm. The longer you've smoked or chewed tobacco, the greater your risk.</li> <li><strong>Atherosclerosis.</strong> Atherosclerosis, the buildup of fat and other substances that can damage the lining of a blood vessel, increases your risk of an aneurysm.</li> <li><strong>Being male.</strong> Men develop abdominal aortic aneurysms much more often than women do.</li> <li><strong>Family history.</strong> People who have a family history of abdominal aortic aneurysm are at increased risk of having the condition. People who have a family history of aneurysms tend to develop aneurysms at a younger age and are at higher risk of rupture.</li></ul>
//  <p>Tears in the wall of the aorta (dissection) are the main complications of abdominal aortic aneurysm. A ruptured aortic aneurysm can lead to life-threatening internal bleeding. In general, the larger the aneurysm, the greater the risk of rupture.</p>
//  <p>Signs and symptoms that your aortic aneurysm has burst include:</p>
//  <ul>
//   <li>Sudden, intense and persistent abdominal or back pain</li>
//   <li>Pain that radiates to your back or legs</li>
//   <li>Sweatiness</li>
//   <li>Clamminess</li>
//   <li>Dizziness</li>
//   <li>Nausea</li>
//   <li>Vomiting</li>
//   <li>Low blood pressure</li>
//   <li>Fast pulse</li>
//   <li>Loss of consciousness</li>
//   <li>Shortness of breath</li>
//  </ul>
//  <p>Another complication of aortic aneurysms is the risk of blood clots. Small blood clots can develop in the area of the aortic aneurysm. If a blood clot breaks loose from the inside wall of an aneurysm and blocks a blood vessel elsewhere in your body, it can cause pain or block the blood flow to the legs, toes, kidneys or abdominal organs.</p>
//  <p>If you think you may have an abdominal aortic aneurysm, or are worried about your aneurysm risk because of a strong family history, make an appointment with your family doctor. If an aneurysm is found early, your treatment may be easier and more effective.</p><p>Since many abdominal aortic aneurysms are found during a routine physical exam, or while your doctor is looking for another condition, there are no special preparations necessary. If you're being screened for an aortic aneurysm, your doctor will likely ask if anyone in your family has ever had an aortic aneurysm, so have that information ready.</p><p>Because appointments can be brief and there's often a lot of ground to cover, it's a good idea to be prepared for your appointment. Here's some information to help you get ready for your appointment, and what to expect from your doctor.</p><h3>What you can do</h3><ul> <li><strong>Be aware of any pre-appointment restrictions.</strong> At the time you make the appointment, be sure to ask if there's anything you need to do in advance, such as restrict your diet. For an ultrasound or echocardiogram, for example, you may need to fast for a period of time beforehand.</li> <li><strong>Write down any symptoms you're experiencing,</strong> including any that may seem unrelated to an abdominal aortic aneurysm.</li> <li><strong>Write down key personal information,</strong> including a family history of heart disease or aneurysms.</li> <li><strong>Make a list of all medications,</strong> vitamins or supplements that you're taking.</li> <li><strong>Take a family member or friend along,</strong> if possible. Sometimes it can be difficult to remember all the information provided to you during an appointment. Someone who accompanies you may remember something that you missed or forgot.</li> <li><strong>Be prepared to discuss</strong> your diet, exercise habits and tobacco use. If you don't already follow a healthy diet or exercise routine, talk to your doctor about any challenges you might face in getting started. Be sure to tell your doctor if you're a current or former smoker.</li> <li><strong>Write down questions to ask</strong> your doctor.</li></ul><p>Your time with your doctor is limited, so preparing a list of questions will help you make the most of your time together. List your questions from most important to least important in case time runs out. For an abdominal aortic aneurysm, some basic questions to ask your doctor include:</p><ul> <li>What's the most likely cause of my symptoms?</li> <li>What kinds of tests will I need?</li> <li>What treatments are available, and which do you think would be the best treatment for me?</li> <li>What's an appropriate level of physical activity?</li> <li>How often do I need to be screened for this aneurysm?</li> <li>Should I tell other family members to be screened for an aneurysm?</li> <li>I have other health conditions. How can I best manage these conditions together?</li> <li>Is there a generic alternative to the medicine you're prescribing me?</li> <li>Are there any brochures or other printed material that I can take home with me?</li> <li>What websites do you recommend visiting for more information?</li></ul><p>In addition to the questions that you've prepared to ask your doctor, don't hesitate to ask additional questions during your appointment at any time that you don't understand something.</p><h3>What to expect from your doctor</h3><p>Your doctor is likely to ask you a number of questions. Being ready to answer them may reserve time to go over any points you want to spend more time on. Your doctor may ask: </p><ul> <li>When did you first notice your symptoms?</li> <li>Do your symptoms come and go, or do you always feel them?</li> <li>How severe are your symptoms?</li> <li>Do you have a family history of aneurysms?</li> <li>Have you ever smoked?</li> <li>Does anything seem to improve your symptoms?</li> <li>What, if anything, appears to worsen your symptoms?</li></ul><h3>What you can do in the meantime</h3><p>It's never too early to make healthy lifestyle changes, such as quitting smoking, eating healthy foods and becoming more physically active. These are primary lines of defense to keep your blood vessels healthy and prevent an abdominal aortic aneurysm from developing or worsening. </p><p>If you're diagnosed with an abdominal aortic aneurysm, you should ask about the size of your aneurysm, whether your doctor has noticed any changes, and how frequently you should visit your doctor for follow-up appointments.</p>
//  <p>Abdominal aortic aneurysms are often found during an examination for another reason. For example, during a routine exam, your doctor may feel a pulsating bulge in your abdomen, though it's unlikely your doctor will be able to hear signs of an aneurysm through a stethoscope. Aortic aneurysms are often found during routine medical tests, such as a chest X-ray or ultrasound of the heart or abdomen, sometimes ordered for a different reason.</p>
//  <p>If your doctor suspects that you have an aortic aneurysm, specialized tests can confirm it. These tests might include:</p>
//  <ul>
//   <li><strong>Abdominal ultrasound.</strong> This exam can help diagnose an abdominal aortic aneurysm. During this painless exam, you lie on your back on an examination table and a small amount of warm gel is applied to your abdomen. The gel helps eliminate the formation of air pockets between your body and the instrument the technician uses to see your aorta, called a transducer. The technician presses the transducer against your skin over your abdomen, moving from one area to another. The transducer sends images to a computer screen that the technician monitors to check for a potential aneurysm.</li>
//   <li><strong>Computerized tomography (CT) scan.</strong> This painless test can provide your doctor with clear images of your aorta. During a CT scan, you lie on a table inside a doughnut-shaped machine called a gantry. Detectors inside the gantry measure the radiation that has passed through your body and converts it into electrical signals. A computer gathers these signals and assigns them a color ranging from black to white, depending on signal intensity. The computer then assembles the images and displays them on a computer monitor.</li>
//   <li><strong>Magnetic resonance imaging (MRI).</strong> MRI is another painless imaging test. Most MRI machines contain a large magnet shaped like a doughnut or tunnel. You lie on a movable table that slides into the tunnel. The magnetic field aligns atomic particles in some of your cells. When radio waves are broadcast toward these aligned particles, they produce signals that vary according to the type of tissue they are. Your doctor can use the images produced by the signals to see if you have an aneurysm.</li>
//  </ul>
//  <h3>Regular screening for people at risk of abdominal aortic aneurysms</h3>
//  <p>The U.S. Preventive Services Task Force recommends that men ages 65 to 75 who have ever smoked should have a one-time screening for abdominal aortic aneurysm using abdominal ultrasound. People older than age 60 with a family history of abdominal aortic aneurysm or other risk factors should talk with their doctors about whether to have a screening ultrasound.</p>
//  <p>Here are the general guidelines for treating abdominal aortic aneurysms. </p>
//  <h3>Small aneurysm</h3>
//  <p>If you have a small abdominal aortic aneurysm — about 1.6 inches, or 4 centimeters (cm), in diameter or smaller — and you have no symptoms, your doctor may suggest a watch-and-wait (observation) approach, rather than surgery. In general, surgery isn't needed for small aneurysms because the risk of surgery likely outweighs the risk of rupture.</p>
//  <p>If you choose this approach, your doctor will monitor your aneurysm with periodic ultrasounds, usually every six to 12 months and encourage you to report immediately if you start having abdominal tenderness or back pain — potential signs of a dissection.</p>
//  <h3>Medium aneurysm</h3>
//  <p>A medium aneurysm measures between 1.6 and 2.1 inches (4 and 5.3 cm). It's less clear how the risks of surgery versus waiting stack up in the case of a medium-size abdominal aortic aneurysm. You'll need to discuss the benefits and risks of waiting versus surgery and make a decision with your doctor. If you choose watchful waiting, you'll need to have an ultrasound every six to 12 months to monitor your aneurysm.</p>
//  <h3>Large, fast-growing or leaking aneurysm</h3>
//  <p>If you have an aneurysm that is large (larger than 2.2 inches, or 5.6 cm) or growing rapidly (grows more than 0.5 cm in six months), you'll probably need surgery. In addition, a leaking, tender or painful aneurysm requires treatment. There are two types of surgery for abdominal aortic aneurysms.</p>
//  <ul>
//   <li><strong>Open-abdominal surgery</strong> to repair an abdominal aortic aneurysm involves removing the damaged section of the aorta and replacing it with a synthetic tube (graft), which is sewn into place, through an open-abdominal approach. With this type of surgery, it will likely take you a month or more to fully recover.</li>
//   <li> <p><strong>Endovascular surgery</strong> is a less invasive procedure sometimes used to repair an aneurysm. Doctors attach a synthetic graft to the end of a thin tube (catheter) that's inserted through an artery in your leg and threaded up into your aorta. The graft — a woven tube covered by a metal mesh support — is placed at the site of the aneurysm and fastened in place with small hooks or pins. The graft reinforces the weakened section of the aorta to prevent rupture of the aneurysm.</p> </li>
//   <p>Recovery time for people who have endovascular surgery is shorter than for people who have open-abdominal surgery. However, follow-up appointments are more frequent because endovascular grafts can leak. Follow-up ultrasounds are generally done every six months for the first year, and then once a year after that. Long-term survival rates are similar for both endovascular surgery and open surgery.</p>
//  </ul>
//  <p>The options for treatment of your aneurysm will depend on a variety of factors, including location of the aneurysm, your age, kidney function and other conditions that may increase your risk of surgery or endovascular repair.</p>
//  <p>The best approach to prevent an aortic aneurysm is to keep your blood vessels as healthy as possible. That means taking these steps:</p><ul> <li>Quit smoking or chewing tobacco.</li> <li>Keep your blood pressure under control.</li> <li>Get regular exercise.</li> <li>Reduce cholesterol and fat in your diet.</li></ul><p>If you have some risk factors for aortic aneurysm, talk to your doctor. If you are at risk, your doctor may recommend additional measures, including medications to lower your blood pressure and relieve stress on weakened arteries.</p>
//  `;
const Item = ({item, onPress, backgroundColor, textColor}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.title}</Text>
  </TouchableOpacity>
);

const DetailDisease = ({navigation}) => {
  const {width} = useWindowDimensions();
  const [selectedId, setSelectedId] = useState(null);
  const [data, setData] = useState({});
  const route = useRoute();
  const index = route.params.id;
  //
  useEffect(() => {
    // fetch('https://jsonplaceholder.typicode.com/posts')
    //   .then(response => response.json())
    //   .then(json => setData(json));

    fetch(`http://10.0.2.2:8080/api/disease/${index}`)
      .then(response => response.json())
      .then(json => setData(json.data[0]))
      .catch(error => {
        console.log(
          'There has been a problem with your fetch operation: ' +
            error.message,
        );
        // ADD THIS THROW error
        throw error;
      });
  }, [index]);
  return (
    <View>
      <View style={styles.eclipse1} />
      <View style={styles.eclipse2} />
      <View style={styles.eclipse3} />
      <View style={styles.eclipse4} />
      <Text style={styles.header}>Detail Disease</Text>
      <Ionicons
        name="arrow-back-outline"
        size={30}
        style={{left: 10, top: 25}}
        onPress={() => navigation.navigate('AppHome')}
      />
      {data && <Text style={styles.nameOfDisease}>{data.NameDisease}</Text>}
      <View style={styles.containerDetailDisease}>
        <ScrollView style={{flex: 1}}>
          {data && (
            <RenderHTML
              baseStyle={{
                fontSize: 15,
                textAlign: 'justify',
                margin: 5,
                padding: 10,
                fontWeight: 'normal',
                fontFamily: 'Poppins',
                lineHeight: 20,
              }}
              contentWidth={width}
              source={{html: data.Decription}}
            />
          )}
        </ScrollView>
      </View>
    </View>
  );
};

export default DetailDisease;

const styles = StyleSheet.create({
  eclipse1: {
    position: 'absolute',
    width: 200,
    height: 200,
    left: -20,
    top: -100,
    borderRadius: 100,
    backgroundColor: '#4FC3F7',
  },
  eclipse2: {
    position: 'absolute',
    width: 200,
    height: 200,
    left: -130,
    top: 20,
    borderRadius: 100,
    backgroundColor: '#81D4FA',
  },
  eclipse3: {
    position: 'absolute',
    width: 200,
    height: 200,
    left: 290,
    top: 650,
    borderRadius: 100,
    backgroundColor: '#7BDFC7',
  },
  eclipse4: {
    position: 'absolute',
    width: 200,
    height: 200,
    left: 175,
    top: 700,
    borderRadius: 100,
    backgroundColor: '#BFF1E5',
  },
  header: {
    position: 'absolute',
    padding: 20,
    left: 110,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 25,
    lineHeight: 38,
    color: 'black',
  },
  nameOfDisease: {
    position: 'absolute',
    width: 500,
    height: 30,
    left: 39,
    top: 70,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 30,
    color: 'black',
  },
  item: {
    backgroundColor: '#F7F3F3',
    borderRadius: 10,
    shadowColor: 'rgba(0, 0, 0, 1)',
    shadowOpacity: 100,
    shadowRadius: 100,
    elevation: 10,
    padding: 10,
    marginTop: 25,
    height: 70,
    marginVertical: 8,
    marginHorizontal: 16,
    fontFamily: 'Poppins',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerDetailDisease: {
    position: 'absolute',
    width: 389,
    height: 650,
    margin: 10,
    top: 100,
    backgroundColor: '#FEFFFF',
    borderRadius: 10,
    shadowColor: 'rgba(0, 0, 0, 1)',
    shadowOpacity: 100,
    shadowRadius: 100,
    elevation: 10,
  },
});
