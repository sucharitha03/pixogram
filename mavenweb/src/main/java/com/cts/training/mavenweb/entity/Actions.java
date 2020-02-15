package com.cts.training.mavenweb.entity;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

public class Actions {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	@Column
	private Integer userId;
	@Column
	private  Integer mediaId;
	@Column
	 private LocalDateTime createdOn;
	@Column
	private boolean status;
	public Actions() {
		// TODO Auto-generated constructor stub
		}


		public Actions(Integer id, Integer userId,Integer mediaId,Boolean status,LocalDateTime createdOn) {
		super();
		this.id = id;
		this.userId = userId;
		this.mediaId=mediaId;
		this.status=status;
		this.createdOn=createdOn;
				
		}



	

	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public Integer getUserId() {
		return userId;
	}
	public void setUserId(Integer userId) {
		this.userId = userId;
	}
	public Integer getMediaId() {
		return mediaId;
	}
	public void setMediaId(Integer mediaId) {
		this.mediaId = mediaId;
	}
	public LocalDateTime getCreatedOn() {
		return createdOn;
	}
	public void setCreatedOn(LocalDateTime createdOn) {
		this.createdOn = createdOn;
	}
	public boolean isStatus() {
		return status;
	}
	public void setStatus(boolean status) {
		this.status = status;
	}
	public String toString() {
		return "Actions [id=" + id + ", userId=" + userId + ", mediaId=" +mediaId +",status="+status +", createdOn=" + createdOn + "]";
		}
}
