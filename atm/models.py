from django.db import models
from django.contrib.auth.hashers import make_password

# Create your models here.

class BankAccountUser(models.Model):
    ACCOUNT_TYPES = [
        ('savings', 'Savings Account'),
        ('current', 'Current Account'),
    ]

    full_name = models.CharField(max_length=100)
    account_number = models.CharField(max_length=12, unique=True)
    email = models.EmailField(unique=True)
    phone_number = models.CharField(max_length=15, unique=True)
    address = models.CharField(max_length=255)
    account_type = models.CharField(max_length=7, choices=ACCOUNT_TYPES)
    deposit = models.DecimalField(max_digits=10, decimal_places=2)
    password = models.CharField(max_length=128, default='*********')
    terms_agreed = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.full_name} - {self.account_type} - {self.account_number}"

    def save(self, *args, **kwargs):
        if not self.account_number:
            last_account = BankAccountUser.objects.order_by('account_number').last()
            if last_account:
                last_number = int(last_account.account_number)
                self.account_number = str(last_number + 1).zfill(12)
            else:
                self.account_number = '123456780000'

        super().save(*args, **kwargs)

    class Meta:
        db_table = "BankAccountUser"


class Transactions(models.Model):
    TRANSACTION_TYPES = [
        ('deposit', 'Deposit'),
        ('withdrawal', 'Withdrawal'),
    ]

    user = models.ForeignKey(BankAccountUser, on_delete=models.CASCADE, related_name='transactions')
    transaction_type = models.CharField(max_length=10, choices=TRANSACTION_TYPES)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.full_name} - {self.transaction_type} of {self.amount}"

    class Meta:
        db_table = "Transactions"
        ordering = ['-timestamp']
