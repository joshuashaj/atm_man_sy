from django.urls import path
from atm import views

urlpatterns = [
    path('',views.index),
    path('openaccount',views.openaccount,name="openaccount"),
    path('login',views.login,name="login"),
    path('success',views.success,name='success'),
    path('withdraw',views.withdraw,name="withdraw"),
    path('home',views.home,name="home"),
    path('logout',views.logout,name='logout'),
    path('changepassword/<int:id>',views.changepassword,name="changepassword"),
    path('forget_password',views.forget_password,name='forget_password'),
    path('forget_password/<int:id>',views.forget_password,name='forget_passwordid')
]