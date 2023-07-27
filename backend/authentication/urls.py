from django.urls import path
from .views import login_view, logout_view, signup_view, ObtainTokenView

urlpatterns = [
    path('login/', login_view),
    path('logout/', logout_view),
    path('signup/', signup_view),
    path('token/', ObtainTokenView.as_view(), name='obtain_token'),
]