import React from 'react'
import { Button ,WhiteSpace, WingBlank } from 'antd-mobile'
export default class Home extends React.Component{
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(item){
      this.props.history.push(`/${item}`)
    }
    
    render(){
       const styles = {
         fontFamily:'Microsoft Yahei',
         fontSize:'16px',
         color:"red"
       }
        return( 
          <WingBlank>
              <h2 style={{fontFamily:'Microsoft Yahei',fontSize:'25px',marginTop:'20px'}}>2019ACM报名表单入口</h2>
              <p style={{fontFamily:'Microsoft Yahei',fontSize:'18px',fontWeight:"bold"}}>注意事项</p>
              <p style={styles}>1.报名工程创新实训班或者竞赛实训班分别进入前面两个表单</p>
              <p style={styles}>2.欲参加CCCC,图灵杯,河北省大学生程序设计大赛等一系列比赛的同学请进入第三个表单</p>
              <WhiteSpace />
            <Button type="primary" onClick={()=>{this.handleClick('jishu')}}>工程创新实训班报名表</Button><WhiteSpace /><WhiteSpace />
            <Button type="ghost" onClick={()=>{this.handleClick('jingsai')}}>CCPC/ICPC竞赛实训班报名表</Button><WhiteSpace /><WhiteSpace />
            <Button type="default" onClick={()=>{this.handleClick('shengsai')}}>程序设计精英报名表</Button><WhiteSpace /><WhiteSpace />
         </WingBlank>
        )
    }
}

