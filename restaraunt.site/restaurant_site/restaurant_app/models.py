from django.db import models 

class Phone_Number(models.Model):
    Phone_Number = models.CharField(max_length=200)
    send_date = models.DateTimeField('Phone number sent')
    def __str__(self):
        return self.Phone_Number



