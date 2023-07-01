import { useToast } from '@chakra-ui/react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useDispatch } from 'react-redux';
import { login } from 'redux/slices/userAuthSlice';
import useErrorHandler from 'utils/errorHandler';
import API from './authApi';

export const useLogin = (send) => {
  const errorHandler = useErrorHandler();
  const dispatch = useDispatch();
  const { mutate, isLoading, isSuccess, error } = useMutation(
    async (values) => {
      const api = new API();
      const res = await api.login(values);
      return res.data.data;
    },
    {
      onSuccess: (data) => {
        const mutatedData = {
          authorization: `bearer ${data.accessToken}`,
          isPinSet: data.user.isPinSet
        };
        dispatch(login(mutatedData));
        localStorage.setItem('userAuth', JSON.stringify(mutatedData));
        send('NEXT');
      },
      onError: (error) => {
        errorHandler(error, 'post');
      }
    }
  );
  return { mutate, isLoading, isSuccess, error };
};

export const useRegister = (send) => {
  const errorHandler = useErrorHandler();
  const dispatch = useDispatch();
  const { mutate, isLoading, isSuccess, error } = useMutation(
    async (values) => {
      const api = new API();
      const res = await api.register(values);
      return res.data.data;
    },
    {
      onSuccess: (data) => {
        const mutatedData = {
          authorization: `bearer ${data.accessToken}`,
          isPinSet: data.user.isPinSet
        };
        dispatch(login(mutatedData));
        localStorage.setItem('userAuth', JSON.stringify(mutatedData));
        send('NEXT');
      },
      onError: (error) => {
        errorHandler(error, 'post');
      }
    }
  );
  return [mutate, isLoading, isSuccess, error];
};

export const useVerifyPin = (cb) => {
  const errorHandler = useErrorHandler();
  const { mutate, isLoading, isSuccess, error } = useMutation(
    async (values) => {
      const api = new API();
      await api.verifyPin(values);
    },
    {
      onSuccess: () => {
        cb();
      },
      onError: (error) => {
        errorHandler(error, 'post');
      }
    }
  );
  return { mutate, isLoading, isSuccess, error };
};

export const useMailOtp = (send, setValue) => {
  const errorHandler = useErrorHandler();
  const { mutate, isLoading, isSuccess, error } = useMutation(
    async (values) => {
      const api = new API();
      const res = await api.mobileAndEmailOtp(values);
      setValue('');
      return res.data.data.token;
    },
    {
      onSuccess: (res) => {
        send('VERIFY_MAIL');
        setValue('emailTokenGenerateOtp', res, { shouldValidate: true });
      },
      onError: (error) => {
        errorHandler(error, 'post');
      }
    }
  );
  return [mutate, isLoading, error, isSuccess];
};

export const useMailOtpVerify = (send, setValue) => {
  const errorHandler = useErrorHandler();
  const { mutate, isLoading, isSuccess, error } = useMutation(
    async (values) => {
      const api = new API();
      const res = await api.mobileAndEmailOtpVerify(values);
      return res.data.data.token;
    },
    {
      onSuccess: (res) => {
        send('NEXT');
        setValue('emailTokenVerifyOtp', res, { shouldValidate: true });
      },
      onError: (error) => {
        errorHandler(error, 'post');
      }
    }
  );
  return [mutate, isLoading, error, isSuccess];
};

export const useMailOtpVerifyResetPass = (send, setValue) => {
  const errorHandler = useErrorHandler();
  const { mutate, isLoading, isSuccess, error } = useMutation(
    async (values) => {
      const api = new API();
      const res = await api.mobileAndEmailOtpVerify(values);
      return res.data.data.token;
    },
    {
      onSuccess: (res) => {
        setValue('emailTokenVerifyOtp', res, { shouldValidate: true });
        send('NEXT');
      },
      onError: (error) => {
        errorHandler(error, 'post');
      }
    }
  );
  return [mutate, isLoading, error, isSuccess];
};

export const useMailOtpVerifyResetPin = (send, setValue) => {
  const errorHandler = useErrorHandler();
  const { mutate, isLoading, isSuccess, error } = useMutation(
    async (values) => {
      const api = new API();
      const res = await api.mobileAndEmailOtpVerify(values);
      return res.data.data.token;
    },
    {
      onSuccess: (res) => {
        setValue('pinTokenVerifyOtp', res, { shouldValidate: true });
        send('NEXT');
      },
      onError: (error) => {
        errorHandler(error, 'post');
      }
    }
  );
  return [mutate, isLoading, error, isSuccess];
};

export const useMobileOtp = (send, setValue) => {
  const errorHandler = useErrorHandler();
  const { mutate, isLoading, isSuccess, error } = useMutation(
    async (values) => {
      const api = new API();
      const res = await api.mobileAndEmailOtp(values);
      return res.data.data.token;
    },
    {
      onSuccess: (res) => {
        send('VERIFY_MOB');
        setValue('mobileTokenGenerateOtp', res, { shouldValidate: true });
      },
      onError: (error) => {
        errorHandler(error, 'post');
      }
    }
  );
  return [mutate, isLoading, error, isSuccess];
};

export const useMobileOtpVerify = (send, setValue) => {
  const errorHandler = useErrorHandler();
  const { mutate, isLoading, isSuccess, error } = useMutation(
    async (values) => {
      const api = new API();
      const res = await api.mobileAndEmailOtpVerify(values);
      return res.data.data.token;
    },
    {
      onSuccess: (res) => {
        send('NEXT');
        setValue('mobileTokenVerifyOtp', res, { shouldValidate: true });
      },
      onError: (error) => {
        errorHandler(error, 'post');
      }
    }
  );
  return [mutate, isLoading, error, isSuccess];
};

export const useSetPin = (send) => {
  const errorHandler = useErrorHandler();
  const dispatch = useDispatch();
  const { mutate, isLoading, isSuccess, error } = useMutation(
    async (values) => {
      const api = new API();
      await api.setPin(values);
    },
    {
      onSuccess: () => {
        const userAuth = JSON.parse(localStorage.getItem('userAuth'));
        userAuth.isPinSet = true;
        localStorage.setItem('userAuth', JSON.stringify(userAuth));
        dispatch(login(userAuth));
        send('SUCCESS');
      },
      onError: (error) => {
        errorHandler(error, 'post');
      }
    }
  );
  return [mutate, isLoading, error, isSuccess];
};

export const useResetPassword = (send) => {
  const errorHandler = useErrorHandler();
  const { mutate, isLoading, isSuccess, error } = useMutation(
    async (values) => {
      const api = new API();
      await api.resetPass(values);
    },
    {
      onSuccess: () => {
        send('NEXT');
      },
      onError: (error) => {
        errorHandler(error, 'post');
      }
    }
  );
  return [mutate, isLoading, error, isSuccess];
};

export const useResetPin = (send) => {
  const errorHandler = useErrorHandler();
  const { mutate, isLoading, isSuccess, error } = useMutation(
    async (values) => {
      const api = new API();
      await api.resetPin(values);
    },
    {
      onSuccess: () => {
        send('NEXT');
      },
      onError: (error) => {
        errorHandler(error, 'post');
      }
    }
  );
  return [mutate, isLoading, error, isSuccess];
};

export const useGetAllUsers = () => {
  const errorHandler = useErrorHandler();
  const {
    data: users,
    isLoading: usersLoading,
    isError: usersError
  } = useQuery(
    'allUsers',
    async () => {
      let api = new API();
      const res = await api.getAllUsers();
      return res.data.data;
    },
    {
      onError: (error) => errorHandler(error)
    }
  );
  return { users, usersLoading, usersError };
};

export const useAddNewUser = (onClose) => {
  const errorHandler = useErrorHandler();
  const queryClient = useQueryClient();
  const toast = useToast();
  const { mutate, isLoading, isSuccess, error } = useMutation(
    async (values) => {
      const api = new API();
      await api.addNewUser(values);
    },
    {
      onSuccess: () => {
        toast({ title: 'User Added', status: 'success' });
        queryClient.invalidateQueries('allUsers');
        onClose();
      },
      onError: (error) => errorHandler(error, 'post')
    }
  );
  return { mutate, isLoading, isSuccess, error };
};

export const useUpdateUser = (onClose) => {
  const errorHandler = useErrorHandler();
  const queryClient = useQueryClient();
  const toast = useToast();
  const { mutate, isLoading, isSuccess, error } = useMutation(
    async (values) => {
      const api = new API();
      await api.updateUser(values);
    },
    {
      onSuccess: () => {
        toast({ title: 'User Updated', status: 'success' });
        queryClient.invalidateQueries('allUsers');
        onClose();
      },
      onError: (error) => errorHandler(error, 'put')
    }
  );
  return { mutate, isLoading, isSuccess, error };
};

export const useGetCategoryItems = (state) => {
  const errorHandler = useErrorHandler();
  const {
    data: categoryItems,
    isLoading,
    isError
  } = useQuery(
    ['categoryItems', state],
    async () => {
      let api = new API();
      const res = await api.getCategoryList(state);
      const mutatedCategories = res.data.data.map((itm) => {
        return { value: itm._id, label: itm.title };
      });
      return mutatedCategories;
    },
    {
      onError: (error) => errorHandler(error)
    }
  );
  return { categoryItems, isLoading, isError };
};

// export const useGetAllClients = () => {
//   const errorHandler = useErrorHandler();
//   const {
//     data: clients,
//     isLoading: clientsLoading,
//     isError: clientsError
//   } = useQuery(
//     'allClients',
//     async () => {
//       let api = new API();
//       const res = await api.getAllClients();
//       return res.data.data;
//     },
//     {
//       onError: (error) => errorHandler(error)
//     }
//   );
//   return { clients, clientsLoading, clientsError };
// };

// export const useAddNewClient = (onClose) => {
//   const errorHandler = useErrorHandler();
//   const queryClient = useQueryClient();
//   const toast = useToast();
//   const { mutate, isLoading, isSuccess, error } = useMutation(
//     async (values) => {
//       const api = new API();
//       await api.addNewClient(values);
//     },
//     {
//       onSuccess: () => {
//         toast({ title: 'Client Added', status: 'success' });
//         queryClient.invalidateQueries('allClients');
//         onClose();
//       },
//       onError: (error) => errorHandler(error, 'post')
//     }
//   );
//   return { mutate, isLoading, isSuccess, error };
// };

// export const useUpdateClient = (onClose) => {
//   const errorHandler = useErrorHandler();
//   const queryClient = useQueryClient();
//   const toast = useToast();
//   const { mutate, isLoading, isSuccess, error } = useMutation(
//     async (values) => {
//       const api = new API();
//       await api.updateClient(values);
//     },
//     {
//       onSuccess: () => {
//         toast({ title: 'Client Updated', status: 'success' });
//         queryClient.invalidateQueries('allClients');
//         onClose();
//       },
//       onError: (error) => errorHandler(error, 'put')
//     }
//   );
//   return { mutate, isLoading, isSuccess, error };
// };

// export const useGetAllCompanies = () => {
//   const errorHandler = useErrorHandler();
//   const {
//     data: companies,
//     isLoading: companiesLoading,
//     isError: companiesError
//   } = useQuery(
//     'allCompanies',
//     async () => {
//       let api = new API();
//       const res = await api.getAllCompanies();
//       return res.data.data;
//     },
//     {
//       onError: (error) => errorHandler(error)
//     }
//   );
//   return { companies, companiesLoading, companiesError };
// };

// export const useAddNewCompany = (onClose) => {
//   const errorHandler = useErrorHandler();
//   const queryClient = useQueryClient();
//   const toast = useToast();
//   const { mutate, isLoading, isSuccess, error } = useMutation(
//     async (values) => {
//       const api = new API();
//       await api.addNewCompany(values);
//     },
//     {
//       onSuccess: () => {
//         toast({ title: 'Company Added', status: 'success' });
//         queryClient.invalidateQueries('allCompanies');
//         onClose();
//       },
//       onError: (error) => errorHandler(error, 'post')
//     }
//   );
//   return { mutate, isLoading, isSuccess, error };
// };

// export const useUpdateCompany = (onClose) => {
//   const errorHandler = useErrorHandler();
//   const queryClient = useQueryClient();
//   const toast = useToast();
//   const { mutate, isLoading, isSuccess, error } = useMutation(
//     async (values) => {
//       const api = new API();
//       await api.updateCompany(values);
//     },
//     {
//       onSuccess: () => {
//         toast({ title: 'Company Updated', status: 'success' });
//         queryClient.invalidateQueries('allCompanies');
//         onClose();
//       },
//       onError: (error) => errorHandler(error, 'put')
//     }
//   );
//   return { mutate, isLoading, isSuccess, error };
// };

// export const useAddNewGig = () => {
//   const errorHandler = useErrorHandler();
//   const queryClient = useQueryClient();
//   const navigate = useNavigate();
//   const toast = useToast();
//   const { mutate, isLoading, isSuccess, error } = useMutation(
//     async (values) => {
//       const api = new API();
//       await api.addNewGig(values);
//     },
//     {
//       onSuccess: () => {
//         toast({ title: 'Gig Added', status: 'success' });
//         queryClient.invalidateQueries('userInfo');
//         queryClient.invalidateQueries('allGigs');
//         navigate('/all-gigs', { replace: true });
//       },
//       onError: (error) => errorHandler(error, 'post')
//     }
//   );
//   return { mutate, isLoading, isSuccess, error };
// };

// export const useEditGig = (gigId) => {
//   const errorHandler = useErrorHandler();
//   const queryClient = useQueryClient();
//   const toast = useToast();
//   const { mutate, isLoading, isSuccess, error } = useMutation(
//     async (values) => {
//       const api = new API();
//       await api.editGig(gigId, values);
//     },
//     {
//       onSuccess: () => {
//         toast({ title: 'Gig Edited', status: 'success' });
//         queryClient.invalidateQueries('userInfo');
//         queryClient.invalidateQueries('allGigs');
//       },
//       onError: (error) => errorHandler(error, 'put')
//     }
//   );
//   return { mutate, isLoading, isSuccess, error };
// };

// export const useUpdateGigStatus = (gigId) => {
//   const errorHandler = useErrorHandler();
//   const queryClient = useQueryClient();
//   const toast = useToast();
//   const {
//     mutate: mutateStatusUpdate,
//     isLoading: isLoadingStatusUpdate,
//     isSuccess,
//     error
//   } = useMutation(
//     async (values) => {
//       const api = new API();
//       await api.updateGigStatus(gigId, values.step, values);
//     },
//     {
//       onSuccess: () => {
//         toast({ title: 'Gig Status Updated', status: 'success' });
//         queryClient.invalidateQueries('userInfo');
//         queryClient.invalidateQueries('allGigs');
//       },
//       onError: (error) => errorHandler(error, 'put')
//     }
//   );
//   return { mutateStatusUpdate, isLoadingStatusUpdate, isSuccess, error };
// };

// export const useGetAllGigs = () => {
//   const errorHandler = useErrorHandler();
//   const {
//     data: gigs,
//     isLoading: gigsLoading,
//     isError: gigsError
//   } = useQuery(
//     'allGigs',
//     async () => {
//       let api = new API();
//       const res = await api.getAllGigs();
//       return res.data.data;
//     },
//     {
//       onError: (error) => errorHandler(error)
//     }
//   );
//   return { gigs, gigsLoading, gigsError };
// };

// export const useAddCostToGig = () => {
//   const errorHandler = useErrorHandler();
//   const queryClient = useQueryClient();
//   const toast = useToast();
//   const { mutate, isLoading, isSuccess, error } = useMutation(
//     async (values) => {
//       const api = new API();
//       await api.addCostToGig(values.gigId, values.values);
//     },
//     {
//       onSuccess: () => {
//         toast({ title: 'Cost added to Gig', status: 'success' });
//         queryClient.invalidateQueries('userInfo');
//       },
//       onError: (error) => errorHandler(error, 'patch')
//     }
//   );
//   return { mutate, isLoading, isSuccess, error };
// };

// export const useDelCostFromGig = () => {
//   const errorHandler = useErrorHandler();
//   const queryClient = useQueryClient();
//   const toast = useToast();
//   const { mutate, isLoading, isSuccess, error } = useMutation(
//     async (values) => {
//       const api = new API();
//       await api.delCostFromGig(values.gigId, values);
//     },
//     {
//       onSuccess: () => {
//         toast({ title: 'Cost deleted from Gig', status: 'success' });
//         queryClient.invalidateQueries('userInfo');
//       },
//       onError: (error) => errorHandler(error, 'patch')
//     }
//   );
//   return { mutate, isLoading, isSuccess, error };
// };
