<template>
	<view class="page">
		<view class="infoTop flex items-center justify-center">
			<view class="cu-avatar xl round ">
				<image src="/static/images/logo.jpg" mode=""></image>
			</view>
		</view>
		<view class="cu-list menu">
			<view class="cu-item  arrow" @click="copy('superman6666666@qq.com')">
				<view class="content">
					<view class="">
						邮件
					</view>
					<text class="text-sm">superman6666666@qq.com</text>
				</view>
				<text class="action text-sm">复制</text>
			</view>
			<view class="cu-item margin-top arrow" @click="copy('li2167466')">
				<view class="content">
					<view class="">
						微信
					</view>
					<text class="text-sm">li2167466</text>
				</view>
				<text class="action text-sm">复制</text>
			</view>
			<view class="cu-item margin-top arrow" @click="copy('http://www.wdxdd.top')">
				<view class="content">
					<view class="">
						个人博客
					</view>
					<text class="text-sm">http://www.wdxdd.top</text>
				</view>
				<text class="action text-sm">复制</text>
			</view>
			
			<view class="cu-item margin-top arrow" @click="copy('https://github.com/lee-citizen')">
				<view class="content">
					<view class="">
						github
					</view>
					<text class="text-sm">https://github.com/lee-citizen</text>
				</view>
				<text class="action text-sm">复制</text>
			</view>

			<view class="cu-item  margin-top arrow" @click="copy('400-140-2108')">
				<view class="content">
					<view class="">
						违法和不良信息举报电话
					</view>
					<text class="text-sm">400-140-2108</text>
				</view>
				<text class="action text-sm">复制</text>
			</view>
		</view>
	</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			copy(data) {
				uni.setClipboardData({
					data,
					success: function() {
						console.log('success');
					}
				});
			}
		}
	}
</script>

<style lang="scss">
	page {
		height: 100%;

		.page {
			height: 100%;
			background-color: #191925;

			.infoTop {
				height: 300rpx;
				width: 100%;


			}
		}

		.cu-avatar {
			overflow: hidden;

			image {
				border-radius: 50%;
				width: 100%;
				height: 100%;
			}
		}

		.cu-list.menu>.cu-item:after {
			border: 0;
		}

		.cu-list.menu>.cu-item {
			background-color: #191925;
			color: #AFADB2;

			.title {
				color: #95969B;
			}

			.info {
				color: #60616B;
			}
		}

	}

	.items-center {
		align-items: center;
	}
</style>
