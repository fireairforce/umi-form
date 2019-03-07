import React from 'react'
import axios from 'axios'
import {  Col, Form, Input,Row,Cascader ,Radio } from 'antd'
import {　Modal,Button　} from 'antd-mobile'
import verity from 'utils/regex'
import Options from 'utils/Options'
import styles from './index.less'
const FormItem = Form.Item
const RadioGroup = Radio.Group
// const Option = Select.Option
class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: false,
      submitted: false,
      showModal:false,
      title:'工程创新实训班',
      value:'jishu'
    }
    this.handleReset = this.handleReset.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    // this.handleSelect = this.handleSelect.bind(this)
  }

  handleReset () {
    this.setState({loading: false,submitted:false})
    this.props.form.resetFields()
  }

  //  handleSelect(value){
  //     if(value === 'jishu'){
  //       this.setState({
  //         title:'工程创新实训班',
  //         value
  //       })
  //     }else if(value === 'jingsai'){
  //       this.setState({
  //         title:'ccpc/icpc竞赛实训班',
  //         value
  //       })
  //     }else{
  //       this.setState({
  //         title:'程序设计精英',
  //         value
  //       })
  //     }
  //  }
  
   componentDidMount(){
     let value = this.props.match.params.id;
     if(value === 'jishu'){
      this.setState({
        title:'工程创新实训班',
        value
      })
    }else if(value === 'jingsai'){
      this.setState({
        title:'ccpc/icpc竞赛实训班',
        value
      })
    }else{
      this.setState({
        title:'程序设计精英',
        value
      })
    }
   }

  handleSubmit(){
      const { value } = this.state;
      this.setState({ loading:true })
      let data = this.props.form.getFieldsValue();
      const {xm,xb,zy,xh,bj,bjxlh,sjh,qq} = data;
      const content = {
        name:xm,
        sex:xb==='1'?'男':'女',
        "school/major":zy,
        studentNumber:xh,
        class:bj,
        classNumber:bjxlh,
        mobile:sjh,
        QQ:qq
      }
      axios.post(`http://test.ela.moe/baoming/${value}`,{
          ...content
      }).then(res=>{
        if(res.status===200){
          this.setState({
            loading:false,
            submitted:true,
            showModal:true
          })
        }
      })
     
  }

  render () {
    const { getFieldDecorator } = this.props.form
    const { title,value } = this.state;
    const formItemLayout = {
      labelCol: {
        xs: {span: 24},
        sm: {span: 6}
      },
      wrapperCol: {
        xs: {span: 24},
        sm: {span: 12}
      }
    }
    return (
       <div className={styles.wrapper}>
       
        <div className={styles.bgc}>
        <div className={styles.header}>
           <h2>{`${title}报名表`}</h2>
        </div>
        <div className={styles.content}>
          
          {/* <Form layout="inline" >
          <div className={styles.list}>
              <FormItem>
              {
                  <Select
                    style={{width:"46vw",marginBottom:"20px"}}
                    defaultValue="code"
                >
                  <Option value="code" onClick={()=>{this.handleSelect('jishu')}}>工程创新实训班</Option>
                  <Option value="codelover" onClick={()=>{this.handleSelect('jingsai')}}>ccpc/icpc竞赛实训班</Option>
                  <Option value="codemachine" onClick={()=>{this.handleSelect('shengsai')}}>程序设计精英</Option>   
                </Select>
              } 
              </FormItem>   
              </div>
          </Form> */}
          
         <Form 
         >
                 <FormItem
                    label='姓名'
                    {...formItemLayout}
                    key='name'
                    >
                        {getFieldDecorator('xm', {
                            rules: [{ required: true, message: '请输入姓名!' }],
                        })(
                            <Input placeholder="请输入姓名"  />
                        )}
                    </FormItem>

                <FormItem
                    label='性别'
                    {...formItemLayout}
                    key='bumen'
                >
                    {getFieldDecorator('xb', {
                    rules: [{
                        required: true, message: '请选择性别'
                    }]
                    })(
                      <RadioGroup name="radiogroup" initialValue={1}>
                        <Radio value={1}>男</Radio>
                        <Radio value={2}>女</Radio>
                      </RadioGroup>
                    )}
                </FormItem>

                <FormItem
                    label='专业'
                    {...formItemLayout}
                    key='carnumber'
                    >
                        {getFieldDecorator('zy', {
                            rules: [{ required: true, message: '请选择您的专业' }],
                        })(
                          <Cascader options={Options} placeholder="请选择您的专业" />
                        )}
                </FormItem>

                <FormItem
                        label='学号'
                        {...formItemLayout}
                        key='xh'
                        >
                            {getFieldDecorator('xh', {
                                rules: [{required: true, message: '请输入学号!' }],
                            })(
                                <Input placeholder="请输入您的学号"/>
                            )}
                </FormItem>

                <FormItem
                      label='班级'
                      {...formItemLayout}
                      key='bj'
                      >
                      {getFieldDecorator('bj', {
                            rules: [{ required: true,message: '请填写您的班级' }],
                      })(
                          <Input placeholder="请填写您的班级,例如1804" />
                      )}
                </FormItem>

                <FormItem
                      label='班级序列号'
                      {...formItemLayout}
                      key='bjxlh'
                      >
                      {getFieldDecorator('bjxlh', {
                            rules: [{ required: true,message: '请填写您的班级序列号' }],
                      })(
                          <Input placeholder="请填写您的班级序列号" />
                      )}
                </FormItem>

                <FormItem
                      label='手机号'
                      {...formItemLayout}
                      key='mobile'
                      >
                      {getFieldDecorator('sjh', {
                            rules: [{
                              pattern:verity.mobile,message: '请输入正确的号码'
                          },{ required: true,message: '请填写您的手机号' }],
                      })(
                          <Input placeholder="请填写您的手机号" />
                      )}
                </FormItem>

                <FormItem
                    label='QQ号'
                    {...formItemLayout}
                    key='QQ'
                >
                      {getFieldDecorator('qq', {
                            rules: [{
                              pattern:verity.qq,message: '请输入正确的QQ号'
                          },{ required: true,message: '请填写您的QQ号' }],
                      })(
                          <Input placeholder="请填写您的QQ号" />
                      )}
                </FormItem>

          <FormItem
            key="form-content-footer"
          >
            <Row gutter={16} type='flex'>
              <Col xs={{span: 24}} sm={{span: 12, offset: 6}}>
                <Button
                  type='primary'
                  loading={this.state.loading}
                  disabled={this.state.submitted}
                  onClick={this.handleSubmit}
                >
                  {this.state.submitted ? '提交成功' : '点击提交'}
                </Button>

                <Button
                  type="ghost"
                  onClick={this.handleReset}
                  className='form-button-2'
                  style={{marginTop: 20}}
                >
                  重置
                </Button>
              </Col>
            </Row>
          </FormItem>

        </Form>
        </div>
        </div>
        <Modal
          visible={this.state.showModal}
          transparent
          maskClosable={false}
          onClose={()=>{this.setState({showModal:false})}}
          title="你的请求已提交"
          footer={[{ text: 'Ok', onPress: () => { this.setState({showModal:false}) } }]}
          wrapProps={{ onTouchStart: this.onWrapTouchStart }}
        >
          <div style={{ height: 100, overflow: 'scroll' }}>
                {value=== 'jishu'?<img src="http://wdlj.zoomdong.xin/acmclub-logo.jpg" alt="gc" style={{width:'80px',height:'80px'}}/>:<img src="http://wdlj.zoomdong.xin/acmicpc.jpg" alt="acm" style={{width:'120px',height:'90px'}}/>}
                <p style={{textAlign:"center" ,fontSize:'18px'}}>请等待后续通知</p>
          </div>
        </Modal>
      </div>
    )
  }
}

export default Form.create()(Home);


