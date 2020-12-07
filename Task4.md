# Task 4

#### 1. Make the code below cleaner and readable

```php

public function getPrice() {
    if($customer->group == 'distributor') {
        if($customer->status == 'active') {
            if($customer->debt > 10000000) {
                return error('this customer cannot make a purchase due to his debt over limit');
            } else {
                return Price::get('distributor');
            }
        } else {
            return error('this customer is not active')
        }
    }
    elseif($customer->group == 'general') {
        if($customer->status == 'active') {
            if($customer->debt > 10000000) {
                return error('this customer cannot make a purchase due to his debt over limit');
            } else {
                return Price::get('general');
            }
        } else {
            return error('this customer is not active')
        }
    }
    }
}

```

#### 2. After change the code, make a pull request
