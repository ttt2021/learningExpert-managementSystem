// miniprogram/pages/login/login.js
const db = wx.cloud.database()
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		account: '',
		password: ''
	},

	inputAccount: function (e) {
		// console.log(e)
		this.setData({
			account: e.detail.value
		})
	},

	inputPwd: function (e) {
		// console.log(e)
		this.setData({
			password: e.detail.value
		})
	},

	login: function () {
		const that = this
		if (that.data.account.length === 0 || that.data.password.length === 0) {
			wx.showToast({
				title: '亲！不能为空哦',
				icon: 'loading',
				duration: 2000
			})
		}
		// 调用数据库
		wx.cloud.callFunction({
			name: 'getManagerInfo',
			data: {}
		}).then(res => {
			// console.log(res)
			let _account = res.result.data[0].account
			let _password = res.result.data[0].password
			if (that.data.account === _account && that.data.password === _password) {
				// console.log(that.data.account, that.data.password, _account, _password)
				wx.switchTab({
					url: '/pages/index/index',
					success: (result) => {
						console.log('登录成功')
					}
				})
			} else {
				wx.showToast({
					title: '登录失败，有误',
					icon: 'loading',
					duration: 2000
				})
			}
		})
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {

	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function () {

	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function () {

	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function () {

	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function () {

	},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh: function () {

	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function () {

	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function () {

	}
})